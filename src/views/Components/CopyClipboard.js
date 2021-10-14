import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";

const useStyles = makeStyles(styles);

export default function CopyClipboard({copyText}) {
    const [isCopied, setIsCopied] = useState(false);
    const classes = useStyles();
  
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
      // onClick handler function for the copy button
      const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
          .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
  
    return(
        <>
        <div>
            <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                    id="outlined-read-only-input"
                    defaultValue={copyText}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                    fullWidth={true}
                    />

                </GridItem>
                <GridItem xs={12} sm={1} md={1} justify="right">
                    {/* Bind our handler function to the onClick button property */}
                    <Button color="info" onClick={handleCopyClick} >
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                    </Button>
                </GridItem>

            </GridContainer>
        </div>  
        </>
    )
  }