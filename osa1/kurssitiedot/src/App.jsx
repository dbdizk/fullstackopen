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
      <p>Number of exercises: {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const totalExercises = (parts) => {
    return parts.reduce((sum, part) => sum + part.exercises, 0);
  };

  const total = totalExercises(course.parts);

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
