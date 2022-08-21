import React, { useMemo } from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import {InsertLinkTwoTone, LinkOffTwoTone} from "@material-ui/icons";
import Edit from "@material-ui/icons/Edit";
import * as web3 from '@solana/web3.js';
import {useEffect, useState} from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import '@solana/wallet-adapter-react-ui/styles.css';
import './Dashboard.css';

import { ConnectionProvider,  WalletProvider } from '@solana/wallet-adapter-react';
import {useConnection, useWallet} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import { clusterApiUrl } from '@solana/web3.js';


import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import {AccountBalanceWalletTwoTone} from "@material-ui/icons";
import Success from "../../components/Typography/Success";
import CopyClipboard from "views/Components/CopyClipboard";

const useStyles = makeStyles(styles);

/*
const WalletAdapterComp = () => {

  const { connection } = useConnection();
  const { publicKey, wallet, disconnect } = useWallet();

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSlopeWallet(),
    getSolflareWallet(),
    getTorusWallet({
      options: { clientId: 'BHIiAHsxMSqcEKnHAZw0Z-Kz6japXZ52w4KwnANs5I_RWZdhG1s_sKEOhgodW4NmCyAuMCw32AIkmZGPPO_QjTA' } // This is just for testing and will be removed, Get a client ID @ https://developer.tor.us and add it in the build pipeline
    }),
    getLedgerWallet(),
    getSolletWallet({ network }),
    getSolletExtensionWallet({ network }),
  ], [network]);

  return (
    <div>
    <ConnectionProvider
      endpoint={endpoint}
    >
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(err) => {
          console.log('error happened:', err)
        }}
      >
        <WalletModalProvider
          logo={<b>🗝</b>}
          // featuredWallets={1}
        >
          <WalletMultiButton />
          <WalletDisconnectButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </div>
  );
};
*/


/*
function WalletCard(props) {

  const {
    connectionError,
    phantomInstalled,
    phantomConnected,
    disconnectWallet,
    connectWallet,
    pubKey,
  } = props;

  const header = () => {
    if(!phantomInstalled){
      return (
        <>
          <p className={props.classes.cardCategory}>Phantom not installed.</p>
          <h3 className={props.classes.cardTitle}>
            For best experience please install Phantom wallet!
          </h3>
        </>
      )
    } else if(!phantomConnected){
      return (
        <>
          <p className={props.classes.cardCategory}>Good news, but.. !</p>
          <h3 className={props.classes.cardTitle}>
            You have a Solana wallet installed, but it's not yet connected!
          </h3>
        </>
      )
    } else{
      return (
        <>
          <p className={props.classes.cardCategory}>Good news!</p>
          <h3 className={props.classes.cardTitle}>
            You have a Solana wallet installed and connected!
          </h3>
        </>
      )
    }
  }
  const colorCode = () => {
    if(!phantomInstalled){
      return 'danger'
    } else if(!phantomConnected){
      return 'warning'
    } else{
      return 'success'
    }
  }
  const getBody = () => {
    if(!phantomInstalled){
      return (
        <CardBody>
          <h3>You can <a href="https://phantom.app/" target="_blank" rel="noreferrer">install Phantom extension easily here</a>.</h3>
          If you wallet is installed and set-up, please click on the refresh button here <Tooltip
          id="tooltip-top"
          title="Refresh"
          placement="bottom"
          classes={{tooltip: props.classes.tooltip}}
        >
          <Button
            simple color="info"
            justIcon
            onClick={props.checkWallet}
          >
            <Refresh className={props.classes.underChartIcons}/>
          </Button>
        </Tooltip> to continue. or use the Wallet adaptor bellow which supports even more wallet types!
          <WalletAdapterComp />

        </CardBody>
      )
    } else if(!phantomConnected){
      return (
        <CardBody>
          <h3>Please connect your wallet.</h3>
          You can connect your wallet by clicking on this button here
          <Tooltip
          id="tooltip-top"
          title="Connect wallet."
          placement="bottom"
          classes={{tooltip: props.classes.tooltip}}
        >
          <Button
            simple color="info"
            justIcon
            onClick={connectWallet}
          >
            <InsertLinkTwoTone className={props.classes.underChartIcons}/>
          </Button>
        </Tooltip> or use the Wallet adaptor bellow which supports even more wallet types!
          <WalletAdapterComp />

        </CardBody>
      )
    } else{
      return (
        <CardBody>
          <h3>You are ready to go!</h3>
          You can disconnect your wallet by clicking on this button here <Tooltip
          id="tooltip-top"
          title="Disconnect wallet."
          placement="bottom"
          classes={{tooltip: props.classes.tooltip}}
        >
          <Button
            simple color="info"
            justIcon
            onClick={disconnectWallet}
          >
            <LinkOffTwoTone className={props.classes.underChartIcons}/>
          </Button>
        </Tooltip> or use the Wallet adaptor bellow which supports even more wallet types!
          <WalletAdapterComp />

        </CardBody>
      )
    }
  }

  const getFooter = () => {
    if(!phantomInstalled){
      return <CardFooter stats>
        <div className={props.classes.stats}>
          <Danger>
            <AccountBalanceWalletTwoTone/>
          </Danger>
          <a href="#" >
            We noticed that you do not have Phantom wallet/extension installed or set-up.
          </a>
        </div>
      </CardFooter>;
    }
    if(connectionError){
      return <CardFooter stats>
        <div className={props.classes.stats}>
          <Danger>
            <AccountBalanceWalletTwoTone/>
          </Danger>
          <a href="#" >
            Error: {connectionError}
          </a> (we won't be able to make any transactions without your permission. we also recommend to create and connect a wallet with 0 SOL with any DAPP, including SKJL. )
        </div>
      </CardFooter>;
    }
    if(!phantomConnected){
      return <CardFooter stats>
        <div className={props.classes.stats}>
          <Warning>
            <AccountBalanceWalletTwoTone/>
          </Warning>
            Wallet is not connected.
        </div>
      </CardFooter>;
    }

    return <CardFooter stats>
      <div className={props.classes.stats}>
        <Success>
          <AccountBalanceWalletTwoTone/>
        </Success>
        Wallet is connected. <b>Your Pub key: {pubKey}</b>
      </div>
    </CardFooter>;
  }

    return (
      <Card>
        <CardHeader stats icon>
          <CardIcon color={colorCode()}>
            <AccountBalanceWalletTwoTone/>
          </CardIcon>
          {header()}
        </CardHeader>
        {getBody()}
        {getFooter()}
      </Card>
    )

}
*/



export default function Dashboard() {
/*
  const [ phantomInstalled, setPhantomInstalled ] = useState(false);
  const [ phantomConnected, setPhantomConnected ] = useState(false);
  const [ connectionError, setConnectionError ] = useState();
  const [ pubKey, setPubKey ] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      checkWallet();
    }, 333)
  },[]);

  const checkWallet = async () => {
    const isPhantomInstalled = window.solana && window.solana.isPhantom
    setPhantomInstalled(isPhantomInstalled);

    await connectWallet({onlyIfTrusted: true});

    // window.solana.on("connect", () => {
    //   setPhantomConnected(true)
    //   console.log("connected!");
    //   const pub = window.solana.publicKey.toString();
    //   console.log('pub key:::', pub);
    //   const con = window.solana.isConnected;
    //   console.log('connected?:::', con);
    //   const autoApprove = window.solana.autoApprove;
    //   console.log('autoApprove?:::', autoApprove);
    // });
    window.solana?.on('disconnect', () => {
      console.log("wallet disconnected!");
      setPhantomConnected(false);
    })
  }

  const connectWallet = async (params = {}) => {
    try {
      const resp = await window.solana?.connect(params);
      const key = resp?.publicKey.toString();
      setPhantomConnected(true);
      setConnectionError(null);
      setPubKey(key);
    } catch (err) {
      console.log('>>>> err connecting to phantom:', err);
      setPhantomConnected(false);
      if(err.code === 4001){ // { code: 4001, message: 'User rejected the request.' }
        setConnectionError('You rejected the request, please make sure you confirm connection request. This is just for authentication purposes.');
      }else{
        setConnectionError(err.message);
      }
    }
  }
  const disconnectWallet = async () => {
    await window.solana.disconnect();
    setPhantomConnected(false);
  }
 */
/*
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
            <WalletCard
            phantomInstalled={phantomInstalled}
            phantomConnected={phantomConnected}
            classes={classes}
            checkWallet={checkWallet}
            connectWallet={()=>connectWallet()}
            disconnectWallet={()=>{disconnectWallet()}}
            connectionError={connectionError}
            pubKey={pubKey}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader>
            <div className={classes.CardHeader}>
                <h4 className={classes.cardTitle}>Copy Calendar Link</h4>
            </div>
            </CardHeader>
            <CardBody>
                  <CopyClipboard copyText="https://skjl.me/booking/test"/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );*/
}
