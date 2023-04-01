import React from "react";

const Blog = () => {
  return (
    <div
      className=" my-3 text-center p-4 rounded"
      style={{ backgroundColor: "#ECD9BA", border: "5px solid #DEC19B" }}
    >
      <ul style={{ listStyle: "none" }}>
        <li>
          {" "}
          <p className="fs-1 text">1. Props vs state?</p>
          <p>
            Ans : Props is an immutable. We can pass the data through props from
            one component to another component.Whereas Sate is mutable. If we
            want to change value of the datas we will use state.
          </p>{" "}
        </li>
        <li>
          {" "}
          <p className="fs-1 text">2. How does useState work?</p>
          <p>
            Ans : useState contains two parameter. Those are<br></br> 1. The
            initial vale of the state. It could be empty or a certain value set
            by the developer.<br></br> 2. A function which shows current value
            of the state.
          </p>{" "}
        </li>
        <li>
          {" "}
          <p className="fs-1 text">
            3.Purpose of useEffect other than fetching data?
          </p>
          <p>
            Ans: The main purpose of useEffect is doing something which we
            cann't do directly in react. For example<br></br> 1. Collecting data
            from localStorage.<br></br> 2. Dynamicly change the document title.
            3. Animating components.<br></br> 4. Easily handling browser events.
          </p>{" "}
        </li>
        <li>
          {" "}
          <p className="fs-1 text">4.How Does React work?</p>
          <p>
            :React has a Virtual DOM. If we do any particular changes in any
            components Virtul DOM will not update the whole project.Virtual DOM
            has a diff algarithom. It helps Virtual DOM to find out the
            particular change from the main DOM and it will update the only
            particular changing part. That's why React is very fast. React is a
            components based JS libaray. It helps us to do efficent coding.
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Blog;
