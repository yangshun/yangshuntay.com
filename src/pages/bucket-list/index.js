import React from 'react';
import Layout from '@theme/Layout';

function BucketList() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1>Bucket List</h1>
            <h3>TODO</h3>
            <ul>
              <li>Speak at a JSConf</li>
              <li>Publish a book</li>
              <li>Create an online course</li>
              <li>Write a state management framework</li>
              <li>Write a Markdown parser from scratch</li>
              <li>Write a package manager from scratch</li>
              <li>
                Invent a programming language and write its compiler (toy one)
              </li>
              <li>Write a module bundler</li>
              <li>Become a Google Dev Expert</li>
              <li>Buy a nice house</li>
            </ul>
            <h3>In Progress</h3>
            <ul>
              <li>Write a CSS framework from scratch</li>
              <li>Write a static site generator from scratch</li>
            </ul>
            <h3>Done</h3>
            <ul>
              <li>Present at F8 (2019, Apr)</li>
              <li>Work at Facebook (2017, Nov)</li>
              <li>Write a testing framework from scratch (2017, Aug)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BucketList;
