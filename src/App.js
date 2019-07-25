import React from 'react';
import logo from './logo.svg';
// import './App.css';
import '../node_modules/react-simple-tree-menu/dist/main.css'
import TreeMenu from 'react-simple-tree-menu'
import Clock from './Clock'

// as an array
const treeData = [
  {
    key: 'first-level-node-1',
    label: 'Node 1 at the first level',
    nodes: [
      {
        key: 'second-level-node-1',
        label: 'Node 1 at the second level',
        nodes: [
          {
            key: 'third-level-node-1',
            label: 'Last node of the branch',
            nodes: [] // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
  {
    key: 'first-level-node-2',
    label: 'Node 2 at the first level',
  },
];

function getList(collection) {
  let list = <li>{collection}</li>;
  let ul = <ul>{list}</ul>;
  return ul;
}

function Profile(profile) {
  return (
      <h2>Name: <span>{profile.name} {profile.secondName}</span></h2>
  )
}

function App() {
  let appHeaderText = ['work!!!', 'good'];
  let mySecondName = 'Ivanov';

  return (
    <div className="App">
      <header className="App-header">
        <p className="good-class">
          Start {appHeaderText[1]}
        </p>
          <p>
            {getList(['asd', 'asdfds', '3'])}
          </p>
      </header>
      <div>
        <TreeMenu data={treeData} />
        <Profile name="Alex" secondName={mySecondName} />
      </div>
      <div>
        <Clock />
        <Clock />
        <Clock startIndex="11" />
      </div>
    </div>
  );
}

export default App;
