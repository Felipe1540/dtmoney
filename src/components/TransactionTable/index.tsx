import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
    usuario: string;
}

export function TransactionTable(){
    const {transactions} = useTransactions();
    const [filterTransactions, setFilterTransactions] = useState<Transaction[]>([]);
    const codigo = localStorage.getItem("id")

    useEffect(() => {
        function filterTransactions(){
            const filter = transactions.filter(transaction => transaction.usuario === codigo);
            setFilterTransactions(filter);
        }
        filterTransactions();
    }, [transactions]);

    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {filterTransactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.usuario}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}