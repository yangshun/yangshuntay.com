import os
import json
import dicttoxml
import datetime
from xml.dom.minidom import parseString

SITE_LINK = "http://yangshun.im/#/"

# Not in use yet
SITE_TITLE = 'Yang Shun\'s CS3216 Blog'
SITE_DESCRIPTION = 'Hi I\'m Yang Shun. This is my blog. I build cool stuff.'

POSTS_DIR_PATH = "./posts/"
POSTS_JSON_FILE_PATH = "./content/posts.json"
POSTS_RSS_FILE_PATH = "./content/posts.rss"

def generate_json(json_output):

    json_output = sorted(json_output, key=lambda post: post['timestamp'], reverse=True)
    # print(json.dumps(json_output, None, indent=4))

    json_file = open(POSTS_JSON_FILE_PATH, 'w+')
    json_file.write(json.dumps(json_output))
    json_file.close()

    print('\nJSON output generated at \'./content/posts.json\'.')

def generate_rss(rss_output):
    for post in rss_output:
        del post['filename']
        post['guid'] = post['post_id']
        post['link'] = SITE_LINK + post['guid']
        del post['post_id']
        post['description'] = post['content']
        del post['content']
        post['pubDate'] = datetime.date.fromtimestamp(post['timestamp'])
        del post['timestamp']
        del post['modified']

    rss_file = open(POSTS_RSS_FILE_PATH, 'w+')
    rss = { 'rss': {'channel': rss_output }}
    xml = dicttoxml.dicttoxml(rss, root=False)
    dom = parseString(xml)

    channel = dom.childNodes[0].childNodes[0]

    titleNode = dom.createElement("title")
    titleNode.appendChild(dom.createTextNode(SITE_TITLE))

    descriptionNode = dom.createElement("description")
    descriptionNode.appendChild(dom.createTextNode(SITE_DESCRIPTION))

    linkNode = dom.createElement("link")
    linkNode.appendChild(dom.createTextNode(SITE_LINK))

    channel.insertBefore(linkNode, channel.firstChild)
    channel.insertBefore(descriptionNode, channel.firstChild)
    channel.insertBefore(titleNode, channel.firstChild)
    prettyxml = dom.toprettyxml()
    # print(prettyxml)
    rss_file.write(prettyxml)
    rss_file.close()

    print('\nRSS file generated at \'./content/posts.rss\'.\n')

def build_posts():
    file_paths = os.listdir(POSTS_DIR_PATH)

    data_output = []

    for file_path in file_paths:
        if file_path.find('.DS_Store') != -1:
            continue
        current_file_path = POSTS_DIR_PATH + file_path
        with open(current_file_path) as f:
            post_title = f.readline()
            throw_away = f.readline()   # second line of post is markdown heading syntax
            file_content = f.read()

        post = {
                'title': post_title.replace('\n', ''),
                'timestamp': int(os.path.getctime(current_file_path)),
                'modified': int(os.path.getmtime(current_file_path)),
                'content': file_content.strip(),
                'filename': file_path,
                'post_id': post_title.replace(' ', '-').replace('?', '').replace('!', '').lower().replace('/', '-').replace('"', '').lower().strip(), # TODO: Make sure there are no duplicate ids
                'post_number': int(file_path.split('.')[-2].split('-')[-1])
                }

        data_output.append(post)

    generate_json(data_output)
    generate_rss(data_output)


build_posts()