export const SRToken = [
  {
    inputs: [
      {
        name: "stakingToken_",
        type: "address"
      },
      {
        name: "rewardToken_",
        type: "address"
      },
      {
        name: "start",
        type: "uint32"
      },
      {
        name: "end",
        type: "uint32"
      },
      {
        name: "rate",
        type: "uint128"
      },
      {
        name: "name_",
        type: "string"
      },
      {
        name: "symbol_",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "allowance",
        type: "uint256"
      },
      {
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "balance",
        type: "uint256"
      },
      {
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxDeposit",
    type: "error"
  },
  {
    inputs: [
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxMint",
    type: "error"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxRedeem",
    type: "error"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxWithdraw",
    type: "error"
  },
  {
    inputs: [

    ],
    name: "EnforcedPause",
    type: "error"
  },
  {
    inputs: [

    ],
    name: "ExpectedPause",
    type: "error"
  },
  {
    inputs: [

    ],
    name: "FailedInnerCall",
    type: "error"
  },
  {
    inputs: [

    ],
    name: "MathOverflowedMulDiv",
    type: "error"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        name: "bits",
        type: "uint8"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [
      {
        name: "start",
        type: "uint256"
      },
      {
        name: "end",
        type: "uint256"
      },
      {
        name: "current",
        type: "uint256"
      }
    ],
    name: "UpdateDuringCurrentPeriod",
    type: "error"
  },
  {
    inputs: [
      {
        name: "start",
        type: "uint256"
      },
      {
        name: "end",
        type: "uint256"
      }
    ],
    name: "UpdateInvalidNewPeriod",
    type: "error"
  },
  {
    inputs: [

    ],
    name: "UpdateInvalidRewardRate",
    type: "error"
  },
  {
    inputs: [
      {
        name: "start",
        type: "uint256"
      },
      {
        name: "current",
        type: "uint256"
      }
    ],
    name: "UpdateStartedNewPeriod",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ClaimReward",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "start",
        type: "uint256"
      },
      {
        indexed: false,
        name: "end",
        type: "uint256"
      },
      {
        indexed: false,
        name: "rate",
        type: "uint256"
      }
    ],
    name: "UpdateRewardPeriod",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rate",
        type: "uint256"
      }
    ],
    name: "UpdateRewardRate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "receiver",
        type: "address"
      },
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [

    ],
    name: "SCALING",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "user",
        type: "address"
      }
    ],
    name: "accruedReward",
    outputs: [
      {
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "asset",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "claimReward",
    outputs: [
      {
        name: "amount",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "isInRewardPeriod",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "lastRewardState",
    outputs: [
      {
        name: "index",
        type: "uint128"
      },
      {
        name: "lastUpdated",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "pause",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "renounceOwnership",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "rewardPeriod",
    outputs: [
      {
        name: "start",
        type: "uint32"
      },
      {
        name: "end",
        type: "uint32"
      },
      {
        name: "rate",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "rewardToken",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "stakingToken",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "totalAssets",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [

    ],
    name: "unpause",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "start",
        type: "uint32"
      },
      {
        name: "end",
        type: "uint32"
      },
      {
        name: "rate",
        type: "uint128"
      }
    ],
    name: "updateRewardPeriod",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "rate",
        type: "uint128"
      }
    ],
    name: "updateRewardRate",
    outputs: [

    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
] as const;