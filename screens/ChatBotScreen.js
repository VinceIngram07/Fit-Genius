// import React, {useState, useEffect,} from 'react';
// // import {Dialogflow_V2} from 'react-native-dialogflow';
// // import dialogflowConfig from './env';
// // import {
// // GiftedChat,
// // Bubble,
// // BubbleProps,
// // Reply,
// // } from 'react-native-gifted-chat';
// const ChatBotScreen = ({ walletBalance, expenses }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.walletBlock}>
//         <Text style={styles.walletLabel}>Wallet Balance:</Text>
//         <Text style={styles.walletValue}>{walletBalance}</Text>
//       </View>
//       <View style={styles.expensesBlock}>
//         <Text style={styles.expensesLabel}>Expenses:</Text>
//         {expenses && expenses.map((expense) => (
//           <View key={expense.id} style={styles.expenseItem}>
//             <Text style={styles.expenseName}>{expense.name}</Text>
//             <Text style={styles.expenseAmount}>{expense.amount}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   walletBlock: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   walletLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   walletValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   expensesBlock: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 10,
//   },
//   expensesLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   expenseItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   expenseName: {
//     fontSize: 16,
//   },
//   expenseAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ChatBotScreen;
