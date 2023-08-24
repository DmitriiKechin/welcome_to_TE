import { Component, PureComponent, memo } from 'react';

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  (prevProps, nextProps) => {
    if (prevProps.user === nextProps) {
      return true;
    } else {
      return false;
    }
  }
);

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.user !== this.props.user;
  }
  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
