import {  TransactionsProvider } from '../../hooks/useTransactions';
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Main() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  
    return(
        <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
       </TransactionsProvider>
    );
}