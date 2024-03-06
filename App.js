// import {View, Text} from 'react-native';
// import React from 'react';

// const Hoc = Wrapped => {
//   return (
//     <View style={{backgroundColor: 'green'}}>
//       <Wrapped />
//     </View>
//   );
// };
// const App1 = () => {
//   return (
//     <View>
//       <Text>vyvvyvyvy</Text>
//     </View>
//   );
// };
// let Y = () => Hoc(App1);
// export default function App() {
//   return (
//     <View>
//       <Y />
//     </View>
//   );
// }
import {View, Text, Pressable, SafeAreaView} from 'react-native';
import React, {useState, useMemo, useReducer} from 'react';

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREASE': {
        return state + 1;
      }
      case 'DECREASE': {
        return state - 1;
      }
    }
  };
  const [count3, dispatch] = useReducer(reducer, 0);
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  let x = useMemo(() => add(count2), [count2]);
  return (
    <SafeAreaView>
      <Pressable onPress={() => dispatch({type: 'INCREASE'})}>
        <Text style={{fontSize: 21}}>{count3}</Text>
      </Pressable>

      <Pressable onPress={() => setcount2(count2 + 1)}>
        <Text style={{fontSize: 21}}>{'calculate' + x}</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const add = a => {
  console.log('dccc');
  return a + 2;
};
