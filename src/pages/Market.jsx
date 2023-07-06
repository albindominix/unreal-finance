import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ethers } from "ethers";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import MuiTable from "../components/MuiTable";
import { Typography } from "@mui/material";
import "./Market.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import MixedChart from "../components/charts/MixedChart";

export default function Market() {
  const [userAddress, setUserAddress] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (window.ethereum) {
      getWalletAddress();
    }
  }, []);

  const style = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#17212B",
    borderRadius:"20px",
   padding:'2rem 2rem'

  };


  const getWalletAddress = async () => {
    if (window.ethereum) {
      try {
        // Connect to the Ethereum network using MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []); //prompts user to connet to metamask
        const signer = provider.getSigner();
        const address = await signer.getAddress(); //  retrieve the Ethereum address associated with that account.
        setUserAddress(address);
      } catch (error) {
        console.error("Error retrieving user address:", error);
      }
    } else {
      alert("MetaMask wallet not detected");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        {open ? (
          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography variant="h1" sx={{ color: "white" }}>
                  ICON
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" >
                  <Typography
                    id="modal-modal-title"
                    variant="h3"
                    color="white"
                  >
                    Connect Wallet
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="subtitle1"
                    component="h2"
                  >
                    To start Using Compound
                  </Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",gap:"3rem",marginTop:"20px",width: "100%"}}>
                  <Box sx={{display:"flex",width:"100%",justifyContent: "space-between",padding: "0 2rem" }}>
                  <div style={{display:"flex"}}>

                    <div>
                      <AccountBalanceWalletIcon  sx={{color:"white"}}/>
                    </div>
                    <Typography
                      variant="h3"
                      color="white"
                      sx={{ marginLeft: "10px" }}
                    >
                      WalletConnect
                    </Typography>
                    </div>
                    <div>
                      <ArrowForwardIcon sx={{color:"white"}} />
                     </div>
                  </Box>
                  <Box sx={{display:"flex",width:"100%",justifyContent: "space-between",padding: "0 2rem" }}>
                  <div style={{display:"flex"}}>

                    <div>
                      <AccountBalanceWalletIcon sx={{color:"white"}}/>
                    </div>
                    <Typography
                      variant="h3"
                      color="white"
                      sx={{ marginLeft: "10px" }}
                    >
                      WalletConnect
                    </Typography>
                    </div>
                    <div>
                      <ArrowForwardIcon sx={{color:"white"}}/>
                    </div>
                  </Box>
                  <Box sx={{display:"flex",width:"100%",justifyContent: "space-between",padding: "0 2rem" }}>
                  <div style={{display:"flex"}}>

                    <div>
                      <AccountBalanceWalletIcon sx={{color:"white"}}/>
                    </div>
                    <Typography
                      variant="h3"
                      color="white"
                      sx={{ marginLeft: "10px" }}
                    >
                      WalletConnect
                    </Typography>
                    </div>
                    <div>
                      <ArrowForwardIcon  sx={{color:"white"}}/>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Modal>
          </div>
        ) : (
          ""
        )}
        <Header handleOpen={handleOpen} />
        <section className="market-top">
          <Box display="flex" marginBottom="40px">
            <Box sx={{ display: { xs: "none", sm: "none" } }}>icons</Box>
            <Box display="flex" flexDirection="column">
              <Box display="flex" alignItems="center">
                <Typography variant="h1" color="white">
                  USDC
                </Typography>
                <Typography
                  variant="h1"
                  style={{ margin: "0 0.5rem", color: "#7A8A99" }}
                >
                  |
                </Typography>
                <Typography variant="h1" color="#7A8A99">
                  Ethereum
                </Typography>
              </Box>
              <Typography variant="subtitle1">{userAddress}</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
            }}
            justifyContent="space-between"
          >
            <Box
              flexDirection="column"
              sx={{ width: { sm: "100%", md: "100%", lg: "46%" } }}
            >
              <Box flexDirection="column">
                <Typography variant="subtitle2">Total Collateral</Typography>
                <Typography
                  variant="h1"
                  sx={{ marginBottom: "20px", color: "white" }}
                >
                  $405
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              >
                <MixedChart />
              </Box>
            </Box>

            <Box
              flexDirection="column"
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "46%" },
                marginTop: { xs: "2rem", sm: "2rem", md: "2rem", lg: "0rem" },
              }}
            >
              <Box flexDirection="column">
                <Typography variant="subtitle2">Total Collateral</Typography>
                <Typography
                  variant="h1"
                  sx={{ marginBottom: "20px", color: "white" }}
                >
                  $405
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              >
                <MixedChart />
              </Box>
            </Box>
          </Box>
        </section>
        <Box rowGap="20px" marginTop="3rem">
          <Box
            padding="2.5rem 2.5rem 2rem"
            color="white"
            backgroundColor=" #17212bd6"
            borderRadius="10px"
          >
            <Box
              display="flex"
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                },
                alignItems: { sm: "center", lg: "" },
              }}
            >
              <Box display="flex" flexWrap="wrap" gap="1rem 0">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "50%", sm: "50%", md: "50%", lg: "25%" },
                    }}
                    gap=".5rem"
                    heght="44px"
                  >
                    <Typography variant="subtitle2">
                      Earn Distribution
                    </Typography>
                    <Typography variant="h2">1324</Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "40%" },
                }}
                height="134px"
                border="1px solid black"
              ></Box>
            </Box>
          </Box>
          <Box padding="2.5rem 0 2rem">
            <MuiTable />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
