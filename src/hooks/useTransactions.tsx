import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
    usuario: {
        codigo: number;
        login: string;
        senha: string;
    };
}

//interface TransactionInput {
//    title: string;
//    amount: number;
//    type: string;
//   category: string;
//}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProvicerProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProvicerProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() =>{
        api.get(`/transaction`)
        .then(response => {
            setTransactions(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    async function createTransaction(transactionInput: TransactionInput) { 
     const response = await api.post('/transaction/save', {
         ...transactionInput,
         createdAt: new Date(),
        })


        const {transaction} = response.data;
                
     setTransactions([
        ...transactions,
        transaction,
     ]);
    }

    return (
        <TransactionsContext.Provider value={ {transactions, createTransaction} }>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}
