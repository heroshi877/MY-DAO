import React, { Component, useState, useEffect, createContext, useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import DaosFactoryContract from "../contracts/DaosFactory.json";
import getWeb3 from "../getWeb3";
import Button from 'react-bootstrap/Button';

export const providerContext = createContext({web3: null, accounts: null, contract: null});

const MainComponent = (props) => {
    const [provider, setProvider] = useState();
    const [isOwner, setIsOwner] = useState(null);

	useEffect(async () => {
		 
	}, [provider]);

    const handleConnect = async () => {

		console.log("start initialize");

		// Récupérer le provider web3
		const callWeb3 = await getWeb3();
  
		// Utiliser web3 pour récupérer les comptes de l’utilisateur (MetaMask dans notre cas) 
		const callAccounts = await callWeb3.eth.getAccounts();
  
		// Récupérer l’instance du smart contract “Voting” avec web3 et les informations du déploiement du fichier (client/src/contracts/Voting.json)
		const networkId = await callWeb3.eth.net.getId();

		const deployedNetwork = DaosFactoryContract.networks[networkId];

		const instance = new callWeb3.eth.Contract(
			DaosFactoryContract.abi,
		  deployedNetwork && deployedNetwork.address,
		);

		provider = ({web3: callWeb3, accounts: callAccounts, contract: instance});
	};

    // if (!provider)
    //     return null;

    const getHeaderContent = () => {
        if(!provider || !provider.accounts)
            return (
                <div>
                    <Button onClick={() => handleConnect}>Connect wallet</Button>
                </div>
            );
        else
        {
			return (
				<div>
					<span >wallet connected</span>
				</div>
			);
        }
    };

    return ( 
        <div className="header-app">
            <h1>MY DAO</h1>
            <div>
                {getHeaderContent()}
            </div>
            <div>
                <providerContext.Provider value={provider}>
                    <div >
                        
                    </div>
                    {/* <div >
                        <HeaderComponent isOwner={isOwner}/>
                    </div> */}
                </providerContext.Provider>
            </div>
        </div>
    );
}

export default MainComponent;