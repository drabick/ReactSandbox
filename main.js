function testme(){
  console.log('Function ran in side react');
};

//ReactDOM.render(
//  <h1>Hello, world!</h1>,
//  document.getElementById('root')
//);

//const name = 'MCP';
//const element = <h1>Hello, {testme()}</h1>;


// Note: this structure is simplified
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);