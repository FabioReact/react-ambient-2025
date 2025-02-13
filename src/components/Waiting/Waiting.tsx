import Loader from "../Loader/Loader";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

const Waiting = ({ loading, children }: Props) => {
  if (loading)
    return (<Loader />);
  return children;
};

export default Waiting;
