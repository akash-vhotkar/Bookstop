import React, {useState} from 'react'

const Dummy =() => {
  const [shownComments, setShownComments] = useState({});
  const [search_results, setsearchresult ] = useState([
      { id: 0, text: "Foo bar", comment: "This is rad" },
      { id: 1, text: "Baz qux", comment: "This is nice" }
    ]);

    console.log("the showwcomments after click is ", shownComments);
    const toggleComment = id => {
    setShownComments(prevShownComments => ({
      ...prevShownComments,
      [id]: !prevShownComments[id]
    }));
 
  };

  return (
    <div>
      {search_results.map(obj => (
        <div key={obj.id}>
          {obj.comment ? (
            <button onClick={() => toggleComment(obj.id)}>Toggle</button>
          ) : null}
          <div>{obj.text}</div>
          {shownComments[obj.id] ? <p>{obj.comment}</p> : null}
        </div>
      ))}
    </div>
  );
};
export default  Dummy