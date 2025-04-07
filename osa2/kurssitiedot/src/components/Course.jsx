const Course = (props) => {
    return (
      <div>
        <Header course={props.course} />
        <Content parts={props.course.parts} />
        <Total total={props.course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
      </div>
    );
  };
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    );
  };
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    );
  };
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    );
  };
  
  const Total = (props) => {
    return (
      <div>
        <p><b>Number of exercises: {props.total}</b></p>
      </div>
    );
  };
  
  export default Course;