import { Switch as SwitchAnt } from 'antd';

type Props = {
  id: string;
  defaultValue: boolean;
  onSwitch: any;
};

const Switch = ({ onSwitch, defaultValue, id }: Props) => {
  return <SwitchAnt id={id} onChange={onSwitch} defaultChecked={defaultValue} />;
};

export default Switch;


// Mon application -> Facade -> Lib externe