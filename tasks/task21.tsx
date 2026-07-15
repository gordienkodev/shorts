// переписать на функциональный компонент

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{date.toString()}</div>;
}

// export class Clock extends Component {
//   timer = null;
//   state = {
//     date: new Date(),
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         date: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return <div>{this.state.date.toString()}</div>;
//   }
// }