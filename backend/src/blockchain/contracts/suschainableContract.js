export const contractInfo = {
  "contractName": "Suschainable",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "nfts",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "owner",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newOwner",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "nftIndex",
          "type": "uint256"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.16+commit.07a7930e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"newOwner\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"nftIndex\",\"type\":\"uint256\"}],\"name\":\"changeOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"nfts\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"owner\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Suschainable.sol\":\"Suschainable\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Suschainable.sol\":{\"keccak256\":\"0x1277e3711f8a67d7105ff32774700ed7e6a7ccea8b11e9bce2915e02b6f43252\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://69ed6458502bc4cebf8260b3fe78508e03929a62b04cca676a781f92be8098e4\",\"dweb:/ipfs/QmTPy9D9uNCPQbCbfytiaU7f6tK3VKD4UfDRRXkh65V5rD\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405180606001604052806040518060400160405280600881526020017f52656420436f617400000000000000000000000000000000000000000000000081525081526020016040518060400160405280600e81526020017f412066617368696f6e20636f617400000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f6e756c6c000000000000000000000000000000000000000000000000000000008152508152506000808081526020019081526020016000206000820151816000019081620000f59190620005d9565b5060208201518160010190816200010d9190620005d9565b506040820151816002019081620001259190620005d9565b5090505060405180606001604052806040518060400160405280600981526020017f426c756520436f6174000000000000000000000000000000000000000000000081525081526020016040518060400160405280600e81526020017f412066617368696f6e20636f617400000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f6e756c6c000000000000000000000000000000000000000000000000000000008152508152506000806001815260200190815260200160002060008201518160000190816200020d9190620005d9565b506020820151816001019081620002259190620005d9565b5060408201518160020190816200023d9190620005d9565b5090505060405180606001604052806040518060400160405280600a81526020017f477265656e20436f61740000000000000000000000000000000000000000000081525081526020016040518060400160405280600e81526020017f412066617368696f6e20636f617400000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250815250600080600281526020019081526020016000206000820151816000019081620003259190620005d9565b5060208201518160010190816200033d9190620005d9565b506040820151816002019081620003559190620005d9565b50905050620006c0565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e157607f821691505b602082108103620003f757620003f662000399565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000422565b6200046d868362000422565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004ba620004b4620004ae8462000485565b6200048f565b62000485565b9050919050565b6000819050919050565b620004d68362000499565b620004ee620004e582620004c1565b8484546200042f565b825550505050565b600090565b62000505620004f6565b62000512818484620004cb565b505050565b5b818110156200053a576200052e600082620004fb565b60018101905062000518565b5050565b601f82111562000589576200055381620003fd565b6200055e8462000412565b810160208510156200056e578190505b620005866200057d8562000412565b83018262000517565b50505b505050565b600082821c905092915050565b6000620005ae600019846008026200058e565b1980831691505092915050565b6000620005c983836200059b565b9150826002028217905092915050565b620005e4826200035f565b67ffffffffffffffff8111156200060057620005ff6200036a565b5b6200060c8254620003c8565b620006198282856200053e565b600060209050601f8311600181146200065157600084156200063c578287015190505b620006488582620005bb565b865550620006b8565b601f1984166200066186620003fd565b60005b828110156200068b5784890151825560018201915060208501945060208101905062000664565b86831015620006ab5784890151620006a7601f8916826200059b565b8355505b6001600288020188555050505b505050505050565b61086a80620006d06000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063265aa6211461003b5780633d9715341461006d575b600080fd5b610055600480360381019061005091906102bc565b610089565b60405161006493929190610379565b60405180910390f35b610087600480360381019061008291906104fa565b61024b565b005b60006020528060005260406000206000915090508060000180546100ac90610585565b80601f01602080910402602001604051908101604052809291908181526020018280546100d890610585565b80156101255780601f106100fa57610100808354040283529160200191610125565b820191906000526020600020905b81548152906001019060200180831161010857829003601f168201915b50505050509080600101805461013a90610585565b80601f016020809104026020016040519081016040528092919081815260200182805461016690610585565b80156101b35780601f10610188576101008083540402835291602001916101b3565b820191906000526020600020905b81548152906001019060200180831161019657829003601f168201915b5050505050908060020180546101c890610585565b80601f01602080910402602001604051908101604052809291908181526020018280546101f490610585565b80156102415780601f1061021657610100808354040283529160200191610241565b820191906000526020600020905b81548152906001019060200180831161022457829003601f168201915b5050505050905083565b81600080838152602001908152602001600020600201908161026d9190610762565b505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61029981610286565b81146102a457600080fd5b50565b6000813590506102b681610290565b92915050565b6000602082840312156102d2576102d161027c565b5b60006102e0848285016102a7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610323578082015181840152602081019050610308565b60008484015250505050565b6000601f19601f8301169050919050565b600061034b826102e9565b61035581856102f4565b9350610365818560208601610305565b61036e8161032f565b840191505092915050565b600060608201905081810360008301526103938186610340565b905081810360208301526103a78185610340565b905081810360408301526103bb8184610340565b9050949350505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104078261032f565b810181811067ffffffffffffffff82111715610426576104256103cf565b5b80604052505050565b6000610439610272565b905061044582826103fe565b919050565b600067ffffffffffffffff821115610465576104646103cf565b5b61046e8261032f565b9050602081019050919050565b82818337600083830152505050565b600061049d6104988461044a565b61042f565b9050828152602081018484840111156104b9576104b86103ca565b5b6104c484828561047b565b509392505050565b600082601f8301126104e1576104e06103c5565b5b81356104f184826020860161048a565b91505092915050565b600080604083850312156105115761051061027c565b5b600083013567ffffffffffffffff81111561052f5761052e610281565b5b61053b858286016104cc565b925050602061054c858286016102a7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061059d57607f821691505b6020821081036105b0576105af610556565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106187fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105db565b61062286836105db565b95508019841693508086168417925050509392505050565b6000819050919050565b600061065f61065a61065584610286565b61063a565b610286565b9050919050565b6000819050919050565b61067983610644565b61068d61068582610666565b8484546105e8565b825550505050565b600090565b6106a2610695565b6106ad818484610670565b505050565b5b818110156106d1576106c660008261069a565b6001810190506106b3565b5050565b601f821115610716576106e7816105b6565b6106f0846105cb565b810160208510156106ff578190505b61071361070b856105cb565b8301826106b2565b50505b505050565b600082821c905092915050565b60006107396000198460080261071b565b1980831691505092915050565b60006107528383610728565b9150826002028217905092915050565b61076b826102e9565b67ffffffffffffffff811115610784576107836103cf565b5b61078e8254610585565b6107998282856106d5565b600060209050601f8311600181146107cc57600084156107ba578287015190505b6107c48582610746565b86555061082c565b601f1984166107da866105b6565b60005b82811015610802578489015182556001820191506020850194506020810190506107dd565b8683101561081f578489015161081b601f891682610728565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220af43716987d058318ac03a9f5f60b2e5c3a6568f53953a1a72672d27bbf7304064736f6c63430008100033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063265aa6211461003b5780633d9715341461006d575b600080fd5b610055600480360381019061005091906102bc565b610089565b60405161006493929190610379565b60405180910390f35b610087600480360381019061008291906104fa565b61024b565b005b60006020528060005260406000206000915090508060000180546100ac90610585565b80601f01602080910402602001604051908101604052809291908181526020018280546100d890610585565b80156101255780601f106100fa57610100808354040283529160200191610125565b820191906000526020600020905b81548152906001019060200180831161010857829003601f168201915b50505050509080600101805461013a90610585565b80601f016020809104026020016040519081016040528092919081815260200182805461016690610585565b80156101b35780601f10610188576101008083540402835291602001916101b3565b820191906000526020600020905b81548152906001019060200180831161019657829003601f168201915b5050505050908060020180546101c890610585565b80601f01602080910402602001604051908101604052809291908181526020018280546101f490610585565b80156102415780601f1061021657610100808354040283529160200191610241565b820191906000526020600020905b81548152906001019060200180831161022457829003601f168201915b5050505050905083565b81600080838152602001908152602001600020600201908161026d9190610762565b505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61029981610286565b81146102a457600080fd5b50565b6000813590506102b681610290565b92915050565b6000602082840312156102d2576102d161027c565b5b60006102e0848285016102a7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610323578082015181840152602081019050610308565b60008484015250505050565b6000601f19601f8301169050919050565b600061034b826102e9565b61035581856102f4565b9350610365818560208601610305565b61036e8161032f565b840191505092915050565b600060608201905081810360008301526103938186610340565b905081810360208301526103a78185610340565b905081810360408301526103bb8184610340565b9050949350505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104078261032f565b810181811067ffffffffffffffff82111715610426576104256103cf565b5b80604052505050565b6000610439610272565b905061044582826103fe565b919050565b600067ffffffffffffffff821115610465576104646103cf565b5b61046e8261032f565b9050602081019050919050565b82818337600083830152505050565b600061049d6104988461044a565b61042f565b9050828152602081018484840111156104b9576104b86103ca565b5b6104c484828561047b565b509392505050565b600082601f8301126104e1576104e06103c5565b5b81356104f184826020860161048a565b91505092915050565b600080604083850312156105115761051061027c565b5b600083013567ffffffffffffffff81111561052f5761052e610281565b5b61053b858286016104cc565b925050602061054c858286016102a7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061059d57607f821691505b6020821081036105b0576105af610556565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106187fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105db565b61062286836105db565b95508019841693508086168417925050509392505050565b6000819050919050565b600061065f61065a61065584610286565b61063a565b610286565b9050919050565b6000819050919050565b61067983610644565b61068d61068582610666565b8484546105e8565b825550505050565b600090565b6106a2610695565b6106ad818484610670565b505050565b5b818110156106d1576106c660008261069a565b6001810190506106b3565b5050565b601f821115610716576106e7816105b6565b6106f0846105cb565b810160208510156106ff578190505b61071361070b856105cb565b8301826106b2565b50505b505050565b600082821c905092915050565b60006107396000198460080261071b565b1980831691505092915050565b60006107528383610728565b9150826002028217905092915050565b61076b826102e9565b67ffffffffffffffff811115610784576107836103cf565b5b61078e8254610585565b6107998282856106d5565b600060209050601f8311600181146107cc57600084156107ba578287015190505b6107c48582610746565b86555061082c565b601f1984166107da866105b6565b60005b82811015610802578489015182556001820191506020850194506020810190506107dd565b8683101561081f578489015161081b601f891682610728565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220af43716987d058318ac03a9f5f60b2e5c3a6568f53953a1a72672d27bbf7304064736f6c63430008100033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5231:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "66:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "77:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "93:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "87:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "87:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "77:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "49:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "59:6:2",
                "type": ""
              }
            ],
            "src": "7:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "140:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "157:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "160:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "150:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "150:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "150:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "254:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "257:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "247:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "247:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "247:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "278:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "281:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "271:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "271:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "271:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "112:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "326:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "346:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "336:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "440:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "443:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "433:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "433:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "433:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "464:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "467:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "457:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "457:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "457:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "298:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "535:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "545:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "559:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "565:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "555:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "555:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "545:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "576:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "606:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "612:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "602:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "602:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "580:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "653:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "667:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "681:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "689:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "677:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "677:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "667:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "633:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "626:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "626:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "623:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "756:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "770:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "770:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "770:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "720:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "743:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "751:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "740:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "740:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "717:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "717:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "714:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "519:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "528:6:2",
                "type": ""
              }
            ],
            "src": "484:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "864:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "874:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "882:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "874:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "902:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "905:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "895:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "895:14:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "895:14:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "918:26:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "936:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "939:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "926:9:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "926:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "918:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "851:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "859:4:2",
                "type": ""
              }
            ],
            "src": "810:141:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1001:49:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1011:33:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1029:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1036:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1025:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1025:14:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1041:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "1021:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1021:23:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1011:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "divide_by_32_ceil",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "984:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "994:6:2",
                "type": ""
              }
            ],
            "src": "957:93:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1109:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1119:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "1144:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1150:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "1140:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1140:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "1119:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "1084:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1090:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "1100:8:2",
                "type": ""
              }
            ],
            "src": "1056:107:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1245:317:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1255:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "1276:10:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1288:1:2",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "1272:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1272:18:2"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "1259:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1299:109:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "1330:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1341:66:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "1311:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1311:97:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "1303:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1417:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "1448:9:2"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "1459:8:2"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "1429:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1429:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "1417:8:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1477:30:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1490:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "1501:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1497:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1497:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1486:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1486:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1477:5:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1516:40:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1529:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "1540:8:2"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "1550:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1536:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1536:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1526:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1526:30:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1516:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "update_byte_slice_dynamic32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1206:5:2",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "1213:10:2",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "1225:8:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1238:6:2",
                "type": ""
              }
            ],
            "src": "1169:393:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1613:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1623:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1634:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1623:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1595:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1605:7:2",
                "type": ""
              }
            ],
            "src": "1568:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1683:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1693:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1700:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "1693:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1669:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "1679:3:2",
                "type": ""
              }
            ],
            "src": "1651:60:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1777:82:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1787:66:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1845:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "1827:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1827:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "1818:8:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1818:34:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1800:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1800:53:2"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "1787:9:2"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1757:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "1767:9:2",
                "type": ""
              }
            ],
            "src": "1717:142:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1912:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1922:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1929:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "1922:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "prepare_store_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1898:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "1908:3:2",
                "type": ""
              }
            ],
            "src": "1865:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2022:193:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2032:63:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "2087:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2056:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2056:39:2"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "2036:16:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "2111:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "2151:4:2"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "2145:5:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2145:11:2"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2158:6:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "2190:16:2"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2166:23:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2166:41:2"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "2117:27:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2117:91:2"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "2104:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2104:105:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2104:105:2"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "1999:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2005:6:2",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "2013:7:2",
                "type": ""
              }
            ],
            "src": "1946:269:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2270:24:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2280:8:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2287:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "2280:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "zero_value_for_split_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "2266:3:2",
                "type": ""
              }
            ],
            "src": "2221:73:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2353:136:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2363:46:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2377:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2377:32:2"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "2367:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "2462:4:2"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2468:6:2"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "2476:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2418:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2418:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2418:65:2"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "2339:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2345:6:2",
                "type": ""
              }
            ],
            "src": "2300:189:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2545:136:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2612:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2656:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2663:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2626:29:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2626:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2626:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "2565:5:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2572:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2562:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2562:14:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2577:26:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2579:22:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2592:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2599:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2588:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2588:13:2"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "2579:5:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2559:2:2",
                    "statements": []
                  },
                  "src": "2555:120:2"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "2533:5:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2540:3:2",
                "type": ""
              }
            ],
            "src": "2495:186:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2766:464:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2792:431:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2806:54:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "2854:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "2822:31:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2822:38:2"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "2810:8:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2873:63:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "2896:8:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "2924:10:2"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "2906:17:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2906:29:2"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2892:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2892:44:2"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "2877:11:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3093:27:2",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3095:23:2",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "3110:8:2"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3095:11:2"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "3077:10:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3089:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "3074:2:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3074:18:2"
                        },
                        "nodeType": "YulIf",
                        "src": "3071:49:2"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "3162:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "3179:8:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "3207:3:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "3189:17:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3189:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3175:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3175:37:2"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "3133:28:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3133:80:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3133:80:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "2783:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2788:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2780:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2780:11:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2777:446:2"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2742:5:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "2749:3:2",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "2754:10:2",
                "type": ""
              }
            ],
            "src": "2687:543:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3299:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3309:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "3334:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3340:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "3330:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3330:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "3309:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_right_unsigned_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "3274:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3280:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "3290:8:2",
                "type": ""
              }
            ],
            "src": "3236:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3410:118:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3420:68:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3469:1:2",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "3472:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "3465:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3465:13:2"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3484:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3480:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3480:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "3436:28:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3436:51:2"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "3432:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3432:56:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "3424:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3497:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3511:4:2"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "3517:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3507:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3507:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "3497:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "mask_bytes_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3387:4:2",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "3393:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "3403:6:2",
                "type": ""
              }
            ],
            "src": "3359:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3614:214:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3747:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3774:4:2"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "3780:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "3755:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3755:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "3747:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3793:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3804:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3814:1:2",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "3817:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "3810:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3810:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3801:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3801:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "3793:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3595:4:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "3601:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "3609:4:2",
                "type": ""
              }
            ],
            "src": "3533:295:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3925:1303:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3936:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3983:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "3950:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3950:37:2"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "3940:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4072:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "4074:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4074:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4074:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4044:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4052:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4041:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4041:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4038:56:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4104:52:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "4150:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "4144:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4144:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "4118:25:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4118:38:2"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "4108:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "4249:4:2"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "4255:6:2"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4263:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "4203:45:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4203:67:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4203:67:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4280:18:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4297:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "4284:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4308:17:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4321:4:2",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "4308:9:2"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4372:611:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4386:37:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "4405:6:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4417:4:2",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "4413:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4413:9:2"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "4401:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4401:22:2"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "4390:7:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4437:51:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4483:4:2"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "4451:31:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4451:37:2"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "4441:6:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4501:10:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4510:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "4505:1:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4569:163:2",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4594:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "4612:3:2"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "4617:9:2"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "4608:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4608:19:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "4602:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4602:26:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4587:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4587:42:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4587:42:2"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4646:24:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4660:6:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4668:1:2",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4656:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4656:14:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "4646:6:2"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4687:31:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "4704:9:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4715:2:2",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4700:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4700:18:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4687:9:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "4535:1:2"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4538:7:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4532:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4532:14:2"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "4547:21:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4549:17:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4558:1:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4561:4:2",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4554:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4554:12:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "4549:1:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "4528:3:2",
                              "statements": []
                            },
                            "src": "4524:208:2"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4768:156:2",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4786:43:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "4813:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "4818:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "4809:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4809:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "4803:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4803:26:2"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "4790:9:2",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4853:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "4880:9:2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "4895:6:2"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4903:4:2",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "4891:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4891:17:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "4861:18:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4861:48:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4846:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4846:64:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4846:64:2"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4751:7:2"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "4760:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4748:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4748:19:2"
                            },
                            "nodeType": "YulIf",
                            "src": "4745:179:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4944:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "4958:6:2"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4966:1:2",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "4954:3:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4954:14:2"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4970:1:2",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4950:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4950:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "4937:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4937:36:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4937:36:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "4365:618:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4370:1:2",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5000:222:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5014:14:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5027:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5018:5:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5051:67:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "5069:35:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "5088:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "5093:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "5084:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5084:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "5078:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5078:26:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "5069:5:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "5044:6:2"
                            },
                            "nodeType": "YulIf",
                            "src": "5041:77:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "5138:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "5197:5:2"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "5204:6:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "5144:52:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5144:67:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "5131:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5131:81:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5131:81:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "4992:230:2",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4345:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4353:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4342:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4342:14:2"
                  },
                  "nodeType": "YulSwitch",
                  "src": "4335:887:2"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "3914:4:2",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "3920:3:2",
                "type": ""
              }
            ],
            "src": "3833:1395:2"
          }
        ]
      },
      "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:10390:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:2",
                "type": ""
              }
            ],
            "src": "7:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:2"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:2"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:2",
                "type": ""
              }
            ],
            "src": "334:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:2",
                "type": ""
              }
            ],
            "src": "417:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:2",
                "type": ""
              }
            ],
            "src": "545:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "777:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "726:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:2",
                "type": ""
              }
            ],
            "src": "690:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1084:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1095:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1111:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1105:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1105:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1095:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1067:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1077:6:2",
                "type": ""
              }
            ],
            "src": "1025:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1226:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1243:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1248:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1236:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1236:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1236:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1264:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1283:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1288:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1279:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1279:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1264:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1198:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1203:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1214:11:2",
                "type": ""
              }
            ],
            "src": "1130:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1367:184:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1377:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1386:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1381:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1446:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1471:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1476:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1467:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1467:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1490:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1495:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1486:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1486:11:2"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1480:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1480:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1460:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1460:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1460:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1407:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1410:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1404:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1404:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1418:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1420:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1429:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1432:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1425:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1425:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1420:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1400:3:2",
                    "statements": []
                  },
                  "src": "1396:113:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1529:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1534:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1525:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1525:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1543:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1518:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1518:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1518:27:2"
                }
              ]
            },
            "name": "copy_memory_to_memory_with_cleanup",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1349:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1354:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1359:6:2",
                "type": ""
              }
            ],
            "src": "1305:246:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1605:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1615:38:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1633:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1640:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1629:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1629:14:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1649:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1645:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1645:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1625:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1625:28:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1615:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1588:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1598:6:2",
                "type": ""
              }
            ],
            "src": "1557:102:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1757:285:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1767:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1814:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1781:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1781:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1771:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1829:78:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1895:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1900:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1836:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1836:71:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1829:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1955:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1962:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1951:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1951:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1969:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1974:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "1916:34:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1916:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1916:65:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1990:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2001:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2028:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2006:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2006:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1997:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1997:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1990:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1738:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1745:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1753:3:2",
                "type": ""
              }
            ],
            "src": "1665:377:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2262:501:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2272:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2284:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2295:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2280:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2280:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2272:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2319:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2330:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2315:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2315:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2338:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2344:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2334:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2334:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2308:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2308:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2308:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2364:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2436:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2445:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2372:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2372:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2364:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2471:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2482:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2467:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2467:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2491:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2497:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2487:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2487:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2460:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2460:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2460:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2517:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2589:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2598:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2525:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2525:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2517:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2624:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2635:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2620:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2620:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2644:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2650:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2640:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2640:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2613:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2613:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2613:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2670:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2742:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2751:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2678:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2678:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2670:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2218:9:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2230:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2238:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2246:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2257:4:2",
                "type": ""
              }
            ],
            "src": "2048:715:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2858:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2875:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2878:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2868:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2868:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2868:12:2"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "2769:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2981:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2998:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3001:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2991:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2991:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2991:12:2"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "2892:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3043:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3060:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3063:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3053:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3053:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3053:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3157:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3160:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3150:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3150:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3150:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3181:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3184:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3174:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3174:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3174:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3015:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3244:238:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3254:58:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3276:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "3306:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "3284:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3284:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3272:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3272:40:2"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "3258:10:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3423:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3425:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3425:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3425:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3366:10:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3378:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3363:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3363:34:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3402:10:2"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3414:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3399:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3399:22:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3360:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3360:62:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3357:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3461:2:2",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "3465:10:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3454:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3454:22:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3454:22:2"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "3230:6:2",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3238:4:2",
                "type": ""
              }
            ],
            "src": "3201:281:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3529:88:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3539:30:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "3549:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3549:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "3539:6:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3598:6:2"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "3606:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "3578:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3578:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3578:33:2"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3513:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "3522:6:2",
                "type": ""
              }
            ],
            "src": "3488:129:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3690:241:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3795:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3797:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3797:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3797:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3767:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3775:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3764:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3764:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3761:56:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3827:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3857:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "3835:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3835:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "3827:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3901:23:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "3913:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3919:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3909:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3909:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "3901:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3674:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3685:4:2",
                "type": ""
              }
            ],
            "src": "3623:308:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4001:82:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "4024:3:2"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "4029:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4034:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "4011:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4011:30:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4011:30:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "4061:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4066:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4057:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4057:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4075:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4050:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4050:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4050:27:2"
                }
              ]
            },
            "name": "copy_calldata_to_memory_with_cleanup",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "3983:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "3988:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3993:6:2",
                "type": ""
              }
            ],
            "src": "3937:146:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4173:341:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4183:75:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4250:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4208:41:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4208:49:2"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "4192:15:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4192:66:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "4183:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "4274:5:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4281:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4267:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4267:21:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4267:21:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4297:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "4312:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4319:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4308:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4308:16:2"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "4301:3:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4362:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "4364:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4364:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4364:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "4343:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4348:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4339:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4339:16:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4357:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4336:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4336:25:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4333:112:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "4491:3:2"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "4496:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4501:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "4454:36:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4454:54:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4454:54:2"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "4146:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4151:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4159:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "4167:5:2",
                "type": ""
              }
            ],
            "src": "4089:425:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4596:278:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4645:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "4647:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4647:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4647:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4624:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4632:4:2",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4620:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4620:17:2"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "4639:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "4616:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4616:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4609:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4609:35:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4606:122:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4737:34:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4764:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4751:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4751:20:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "4741:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4780:88:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4841:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4849:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4837:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4837:17:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4856:6:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4864:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "4789:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4789:79:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "4780:5:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4574:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4582:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "4590:5:2",
                "type": ""
              }
            ],
            "src": "4534:340:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4973:561:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5019:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5021:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5021:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5021:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4994:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5003:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4990:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4990:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5015:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4986:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4986:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4983:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5112:287:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5127:45:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5158:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5169:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5154:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5154:17:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "5141:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5141:31:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5131:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5219:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "5221:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5221:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5221:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "5191:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5199:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "5188:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5188:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "5185:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5316:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5361:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5372:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5357:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5357:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5381:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "5326:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5326:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5316:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5409:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5424:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5438:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5428:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5454:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5489:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5500:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5485:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5485:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5509:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5464:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5464:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5454:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4935:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4946:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4958:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4966:6:2",
                "type": ""
              }
            ],
            "src": "4880:654:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5568:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5585:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5588:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5578:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5578:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5578:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5682:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5685:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5675:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5675:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5675:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5706:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5709:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "5699:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5699:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5699:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "5540:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5777:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5787:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5801:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5807:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "5797:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5797:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "5787:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5818:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5848:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5854:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "5844:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5844:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "5822:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5895:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5909:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5923:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5931:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5919:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5919:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5909:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "5875:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5868:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5868:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5865:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5998:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "6012:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6012:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6012:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "5962:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5985:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5993:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "5982:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5982:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "5959:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5959:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5956:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "5761:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5770:6:2",
                "type": ""
              }
            ],
            "src": "5726:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6106:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6116:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "6124:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "6116:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6144:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "6147:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6137:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6137:14:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6137:14:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6160:26:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6178:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6181:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "6168:9:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6168:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "6160:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "6093:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "6101:4:2",
                "type": ""
              }
            ],
            "src": "6052:141:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6243:49:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6253:33:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6271:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6278:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6267:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6267:14:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6283:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "6263:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6263:23:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "6253:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "divide_by_32_ceil",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6226:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "6236:6:2",
                "type": ""
              }
            ],
            "src": "6199:93:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6351:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6361:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "6386:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6392:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "6382:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6382:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "6361:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "6326:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6332:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "6342:8:2",
                "type": ""
              }
            ],
            "src": "6298:107:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6487:317:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6497:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "6518:10:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6530:1:2",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "6514:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6514:18:2"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "6501:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6541:109:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "6572:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6583:66:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "6553:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6553:97:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "6545:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6659:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "6690:9:2"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "6701:8:2"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "6671:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6671:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "6659:8:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6719:30:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6732:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "6743:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "6739:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6739:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "6728:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6728:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "6719:5:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6758:40:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6771:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "6782:8:2"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "6792:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6778:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6778:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "6768:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6768:30:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "6758:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "update_byte_slice_dynamic32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6448:5:2",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "6455:10:2",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "6467:8:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "6480:6:2",
                "type": ""
              }
            ],
            "src": "6411:393:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6842:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6852:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6859:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "6852:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6828:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "6838:3:2",
                "type": ""
              }
            ],
            "src": "6810:60:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6936:82:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6946:66:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "7004:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "6986:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6986:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "6977:8:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6977:34:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6959:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6959:53:2"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "6946:9:2"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6916:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "6926:9:2",
                "type": ""
              }
            ],
            "src": "6876:142:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7071:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7081:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "7088:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "7081:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "prepare_store_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "7057:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "7067:3:2",
                "type": ""
              }
            ],
            "src": "7024:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7181:193:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7191:63:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "7246:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7215:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7215:39:2"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "7195:16:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "7270:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "7310:4:2"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "7304:5:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7304:11:2"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7317:6:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "7349:16:2"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "7325:23:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7325:41:2"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "7276:27:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7276:91:2"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "7263:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7263:105:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7263:105:2"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "7158:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "7164:6:2",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "7172:7:2",
                "type": ""
              }
            ],
            "src": "7105:269:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7429:24:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7439:8:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "7446:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "7439:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "zero_value_for_split_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "7425:3:2",
                "type": ""
              }
            ],
            "src": "7380:73:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7512:136:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7522:46:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7536:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7536:32:2"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "7526:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "7621:4:2"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "7627:6:2"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "7635:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7577:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7577:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7577:65:2"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "7498:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "7504:6:2",
                "type": ""
              }
            ],
            "src": "7459:189:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7704:136:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7771:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "7815:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7822:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7785:29:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7785:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7785:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "7724:5:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "7731:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "7721:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7721:14:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "7736:26:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7738:22:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "7751:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7758:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7747:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7747:13:2"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "7738:5:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "7718:2:2",
                    "statements": []
                  },
                  "src": "7714:120:2"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "7692:5:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7699:3:2",
                "type": ""
              }
            ],
            "src": "7654:186:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7925:464:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7951:431:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7965:54:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "8013:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "7981:31:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7981:38:2"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "7969:8:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8032:63:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "8055:8:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "8083:10:2"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "8065:17:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8065:29:2"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8051:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8051:44:2"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "8036:11:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8252:27:2",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "8254:23:2",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "8269:8:2"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8254:11:2"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "8236:10:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8248:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "8233:2:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8233:18:2"
                        },
                        "nodeType": "YulIf",
                        "src": "8230:49:2"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "8321:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "8338:8:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "8366:3:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "8348:17:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8348:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8334:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8334:37:2"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "8292:28:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8292:80:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8292:80:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "7942:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7947:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7939:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7939:11:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7936:446:2"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "7901:5:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "7908:3:2",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "7913:10:2",
                "type": ""
              }
            ],
            "src": "7846:543:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8458:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8468:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "8493:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8499:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "8489:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8489:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "8468:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_right_unsigned_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "8433:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8439:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "8449:8:2",
                "type": ""
              }
            ],
            "src": "8395:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8569:118:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8579:68:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8628:1:2",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "8631:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "8624:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8624:13:2"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8643:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "8639:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8639:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "8595:28:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8595:51:2"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "8591:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8591:56:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "8583:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8656:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8670:4:2"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "8676:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "8666:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8666:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "8656:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "mask_bytes_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "8546:4:2",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "8552:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "8562:6:2",
                "type": ""
              }
            ],
            "src": "8518:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8773:214:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8906:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8933:4:2"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "8939:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "8914:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8914:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "8906:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8952:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8963:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8973:1:2",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "8976:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "8969:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8969:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "8960:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8960:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "8952:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "8754:4:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "8760:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "8768:4:2",
                "type": ""
              }
            ],
            "src": "8692:295:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9084:1303:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9095:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "9142:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "9109:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9109:37:2"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "9099:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9231:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "9233:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9233:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9233:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "9203:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9211:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9200:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9200:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9197:56:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9263:52:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "9309:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "9303:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9303:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "9277:25:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9277:38:2"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "9267:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "9408:4:2"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "9414:6:2"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "9422:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "9362:45:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9362:67:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9362:67:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9439:18:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "9456:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "9443:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9467:17:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "9480:4:2",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "9467:9:2"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "9531:611:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9545:37:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "9564:6:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "9576:4:2",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "9572:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9572:9:2"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "9560:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9560:22:2"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "9549:7:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9596:51:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "9642:4:2"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "9610:31:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9610:37:2"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "9600:6:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9660:10:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9669:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "9664:1:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "9728:163:2",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "9753:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "9771:3:2"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "9776:9:2"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "9767:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "9767:19:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "9761:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "9761:26:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "9746:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9746:42:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "9746:42:2"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "9805:24:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "9819:6:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "9827:1:2",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "9815:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9815:14:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "9805:6:2"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "9846:31:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "9863:9:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "9874:2:2",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "9859:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9859:18:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "9846:9:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "9694:1:2"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9697:7:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9691:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9691:14:2"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "9706:21:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "9708:17:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "9717:1:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "9720:4:2",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "9713:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9713:12:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "9708:1:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "9687:3:2",
                              "statements": []
                            },
                            "src": "9683:208:2"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "9927:156:2",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "9945:43:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "9972:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "9977:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "9968:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "9968:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "9962:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9962:26:2"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "9949:9:2",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "10012:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "10039:9:2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "10054:6:2"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "10062:4:2",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "10050:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "10050:17:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "10020:18:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "10020:48:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "10005:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "10005:64:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "10005:64:2"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9910:7:2"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "9919:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9907:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9907:19:2"
                            },
                            "nodeType": "YulIf",
                            "src": "9904:179:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "10103:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "10117:6:2"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10125:1:2",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "10113:3:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10113:14:2"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10129:1:2",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "10109:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10109:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "10096:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10096:36:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "10096:36:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "9524:618:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9529:1:2",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "10159:222:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "10173:14:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10186:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "10177:5:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "10210:67:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "10228:35:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "10247:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "10252:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "10243:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "10243:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "10237:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "10237:26:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "10228:5:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "10203:6:2"
                            },
                            "nodeType": "YulIf",
                            "src": "10200:77:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "10297:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "10356:5:2"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "10363:6:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "10303:52:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10303:67:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "10290:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10290:81:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "10290:81:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "10151:230:2",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "9504:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9512:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9501:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9501:14:2"
                  },
                  "nodeType": "YulSwitch",
                  "src": "9494:887:2"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "9073:4:2",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "9079:3:2",
                "type": ""
              }
            ],
            "src": "8992:1395:2"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "66:455:1:-:0;;;212:194;;;;;;;;;;242:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;232:4;:7;237:1;232:7;;;;;;;;;;;:51;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;300:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;290:4;:7;295:1;290:7;;;;;;;;;;;:52;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;358:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;348:4;:7;353:1;348:7;;;;;;;;;;;:53;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;66:455;;7:99:2;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;66:455:1:-;;;;;;;",
  "deployedSourceMap": "66:455:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;175:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;410:109;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;175:32;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;410:109::-;506:8;483:4;:14;488:8;483:14;;;;;;;;;;;:20;;:31;;;;;;:::i;:::-;;410:109;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:99::-;1077:6;1111:5;1105:12;1095:22;;1025:99;;;:::o;1130:169::-;1214:11;1248:6;1243:3;1236:19;1288:4;1283:3;1279:14;1264:29;;1130:169;;;;:::o;1305:246::-;1386:1;1396:113;1410:6;1407:1;1404:13;1396:113;;;1495:1;1490:3;1486:11;1480:18;1476:1;1471:3;1467:11;1460:39;1432:2;1429:1;1425:10;1420:15;;1396:113;;;1543:1;1534:6;1529:3;1525:16;1518:27;1367:184;1305:246;;;:::o;1557:102::-;1598:6;1649:2;1645:7;1640:2;1633:5;1629:14;1625:28;1615:38;;1557:102;;;:::o;1665:377::-;1753:3;1781:39;1814:5;1781:39;:::i;:::-;1836:71;1900:6;1895:3;1836:71;:::i;:::-;1829:78;;1916:65;1974:6;1969:3;1962:4;1955:5;1951:16;1916:65;:::i;:::-;2006:29;2028:6;2006:29;:::i;:::-;2001:3;1997:39;1990:46;;1757:285;1665:377;;;;:::o;2048:715::-;2257:4;2295:2;2284:9;2280:18;2272:26;;2344:9;2338:4;2334:20;2330:1;2319:9;2315:17;2308:47;2372:78;2445:4;2436:6;2372:78;:::i;:::-;2364:86;;2497:9;2491:4;2487:20;2482:2;2471:9;2467:18;2460:48;2525:78;2598:4;2589:6;2525:78;:::i;:::-;2517:86;;2650:9;2644:4;2640:20;2635:2;2624:9;2620:18;2613:48;2678:78;2751:4;2742:6;2678:78;:::i;:::-;2670:86;;2048:715;;;;;;:::o;2769:117::-;2878:1;2875;2868:12;2892:117;3001:1;2998;2991:12;3015:180;3063:77;3060:1;3053:88;3160:4;3157:1;3150:15;3184:4;3181:1;3174:15;3201:281;3284:27;3306:4;3284:27;:::i;:::-;3276:6;3272:40;3414:6;3402:10;3399:22;3378:18;3366:10;3363:34;3360:62;3357:88;;;3425:18;;:::i;:::-;3357:88;3465:10;3461:2;3454:22;3244:238;3201:281;;:::o;3488:129::-;3522:6;3549:20;;:::i;:::-;3539:30;;3578:33;3606:4;3598:6;3578:33;:::i;:::-;3488:129;;;:::o;3623:308::-;3685:4;3775:18;3767:6;3764:30;3761:56;;;3797:18;;:::i;:::-;3761:56;3835:29;3857:6;3835:29;:::i;:::-;3827:37;;3919:4;3913;3909:15;3901:23;;3623:308;;;:::o;3937:146::-;4034:6;4029:3;4024;4011:30;4075:1;4066:6;4061:3;4057:16;4050:27;3937:146;;;:::o;4089:425::-;4167:5;4192:66;4208:49;4250:6;4208:49;:::i;:::-;4192:66;:::i;:::-;4183:75;;4281:6;4274:5;4267:21;4319:4;4312:5;4308:16;4357:3;4348:6;4343:3;4339:16;4336:25;4333:112;;;4364:79;;:::i;:::-;4333:112;4454:54;4501:6;4496:3;4491;4454:54;:::i;:::-;4173:341;4089:425;;;;;:::o;4534:340::-;4590:5;4639:3;4632:4;4624:6;4620:17;4616:27;4606:122;;4647:79;;:::i;:::-;4606:122;4764:6;4751:20;4789:79;4864:3;4856:6;4849:4;4841:6;4837:17;4789:79;:::i;:::-;4780:88;;4596:278;4534:340;;;;:::o;4880:654::-;4958:6;4966;5015:2;5003:9;4994:7;4990:23;4986:32;4983:119;;;5021:79;;:::i;:::-;4983:119;5169:1;5158:9;5154:17;5141:31;5199:18;5191:6;5188:30;5185:117;;;5221:79;;:::i;:::-;5185:117;5326:63;5381:7;5372:6;5361:9;5357:22;5326:63;:::i;:::-;5316:73;;5112:287;5438:2;5464:53;5509:7;5500:6;5489:9;5485:22;5464:53;:::i;:::-;5454:63;;5409:118;4880:654;;;;;:::o;5540:180::-;5588:77;5585:1;5578:88;5685:4;5682:1;5675:15;5709:4;5706:1;5699:15;5726:320;5770:6;5807:1;5801:4;5797:12;5787:22;;5854:1;5848:4;5844:12;5875:18;5865:81;;5931:4;5923:6;5919:17;5909:27;;5865:81;5993:2;5985:6;5982:14;5962:18;5959:38;5956:84;;6012:18;;:::i;:::-;5956:84;5777:269;5726:320;;;:::o;6052:141::-;6101:4;6124:3;6116:11;;6147:3;6144:1;6137:14;6181:4;6178:1;6168:18;6160:26;;6052:141;;;:::o;6199:93::-;6236:6;6283:2;6278;6271:5;6267:14;6263:23;6253:33;;6199:93;;;:::o;6298:107::-;6342:8;6392:5;6386:4;6382:16;6361:37;;6298:107;;;;:::o;6411:393::-;6480:6;6530:1;6518:10;6514:18;6553:97;6583:66;6572:9;6553:97;:::i;:::-;6671:39;6701:8;6690:9;6671:39;:::i;:::-;6659:51;;6743:4;6739:9;6732:5;6728:21;6719:30;;6792:4;6782:8;6778:19;6771:5;6768:30;6758:40;;6487:317;;6411:393;;;;;:::o;6810:60::-;6838:3;6859:5;6852:12;;6810:60;;;:::o;6876:142::-;6926:9;6959:53;6977:34;6986:24;7004:5;6986:24;:::i;:::-;6977:34;:::i;:::-;6959:53;:::i;:::-;6946:66;;6876:142;;;:::o;7024:75::-;7067:3;7088:5;7081:12;;7024:75;;;:::o;7105:269::-;7215:39;7246:7;7215:39;:::i;:::-;7276:91;7325:41;7349:16;7325:41;:::i;:::-;7317:6;7310:4;7304:11;7276:91;:::i;:::-;7270:4;7263:105;7181:193;7105:269;;;:::o;7380:73::-;7425:3;7380:73;:::o;7459:189::-;7536:32;;:::i;:::-;7577:65;7635:6;7627;7621:4;7577:65;:::i;:::-;7512:136;7459:189;;:::o;7654:186::-;7714:120;7731:3;7724:5;7721:14;7714:120;;;7785:39;7822:1;7815:5;7785:39;:::i;:::-;7758:1;7751:5;7747:13;7738:22;;7714:120;;;7654:186;;:::o;7846:543::-;7947:2;7942:3;7939:11;7936:446;;;7981:38;8013:5;7981:38;:::i;:::-;8065:29;8083:10;8065:29;:::i;:::-;8055:8;8051:44;8248:2;8236:10;8233:18;8230:49;;;8269:8;8254:23;;8230:49;8292:80;8348:22;8366:3;8348:22;:::i;:::-;8338:8;8334:37;8321:11;8292:80;:::i;:::-;7951:431;;7936:446;7846:543;;;:::o;8395:117::-;8449:8;8499:5;8493:4;8489:16;8468:37;;8395:117;;;;:::o;8518:169::-;8562:6;8595:51;8643:1;8639:6;8631:5;8628:1;8624:13;8595:51;:::i;:::-;8591:56;8676:4;8670;8666:15;8656:25;;8569:118;8518:169;;;;:::o;8692:295::-;8768:4;8914:29;8939:3;8933:4;8914:29;:::i;:::-;8906:37;;8976:3;8973:1;8969:11;8963:4;8960:21;8952:29;;8692:295;;;;:::o;8992:1395::-;9109:37;9142:3;9109:37;:::i;:::-;9211:18;9203:6;9200:30;9197:56;;;9233:18;;:::i;:::-;9197:56;9277:38;9309:4;9303:11;9277:38;:::i;:::-;9362:67;9422:6;9414;9408:4;9362:67;:::i;:::-;9456:1;9480:4;9467:17;;9512:2;9504:6;9501:14;9529:1;9524:618;;;;10186:1;10203:6;10200:77;;;10252:9;10247:3;10243:19;10237:26;10228:35;;10200:77;10303:67;10363:6;10356:5;10303:67;:::i;:::-;10297:4;10290:81;10159:222;9494:887;;9524:618;9576:4;9572:9;9564:6;9560:22;9610:37;9642:4;9610:37;:::i;:::-;9669:1;9683:208;9697:7;9694:1;9691:14;9683:208;;;9776:9;9771:3;9767:19;9761:26;9753:6;9746:42;9827:1;9819:6;9815:14;9805:24;;9874:2;9863:9;9859:18;9846:31;;9720:4;9717:1;9713:12;9708:17;;9683:208;;;9919:6;9910:7;9907:19;9904:179;;;9977:9;9972:3;9968:19;9962:26;10020:48;10062:4;10054:6;10050:17;10039:9;10020:48;:::i;:::-;10012:6;10005:64;9927:156;9904:179;10129:1;10125;10117:6;10113:14;10109:22;10103:4;10096:36;9531:611;;;9494:887;;9084:1303;;;8992:1395;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Suschainable { \n\n  struct NFT { \n    string title;\n    string description;\n    string owner;\n  }\n\n  mapping(uint => NFT) public nfts;\n\n  constructor() {\n    nfts[0] = NFT(\"Red Coat\", \"A fashion coat\", \"null\") ;\n    nfts[1] = NFT(\"Blue Coat\", \"A fashion coat\", \"null\");\n    nfts[2] = NFT(\"Green Coat\", \"A fashion coat\", \"null\");\n  }\n\n  function changeOwner(string memory newOwner, uint nftIndex) public {\n    nfts[nftIndex].owner = newOwner;\n  }\n}\n",
  "sourcePath": "C:\\Users\\murilo\\Desktop\\hackaton\\hackaton22\\smart-contracts\\contracts\\Suschainable.sol",
  "ast": {
    "absolutePath": "project:/contracts/Suschainable.sol",
    "exportedSymbols": {
      "Suschainable": [
        96
      ]
    },
    "id": 97,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:32:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Suschainable",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 96,
        "linearizedBaseContracts": [
          96
        ],
        "name": "Suschainable",
        "nameLocation": "75:12:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Suschainable.NFT",
            "id": 41,
            "members": [
              {
                "constant": false,
                "id": 36,
                "mutability": "mutable",
                "name": "title",
                "nameLocation": "119:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "112:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 35,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "112:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38,
                "mutability": "mutable",
                "name": "description",
                "nameLocation": "137:11:1",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "130:18:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 37,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "130:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 40,
                "mutability": "mutable",
                "name": "owner",
                "nameLocation": "161:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "154:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 39,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "154:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "NFT",
            "nameLocation": "101:3:1",
            "nodeType": "StructDefinition",
            "scope": 96,
            "src": "94:77:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "265aa621",
            "id": 46,
            "mutability": "mutable",
            "name": "nfts",
            "nameLocation": "203:4:1",
            "nodeType": "VariableDeclaration",
            "scope": 96,
            "src": "175:32:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
              "typeString": "mapping(uint256 => struct Suschainable.NFT)"
            },
            "typeName": {
              "id": 45,
              "keyType": {
                "id": 42,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "183:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "175:20:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
                "typeString": "mapping(uint256 => struct Suschainable.NFT)"
              },
              "valueType": {
                "id": 44,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 43,
                  "name": "NFT",
                  "nameLocations": [
                    "191:3:1"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 41,
                  "src": "191:3:1"
                },
                "referencedDeclaration": 41,
                "src": "191:3:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_NFT_$41_storage_ptr",
                  "typeString": "struct Suschainable.NFT"
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 79,
              "nodeType": "Block",
              "src": "226:180:1",
              "statements": [
                {
                  "expression": {
                    "id": 57,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 49,
                        "name": "nfts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "232:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
                          "typeString": "mapping(uint256 => struct Suschainable.NFT storage ref)"
                        }
                      },
                      "id": 51,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "237:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "232:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_storage",
                        "typeString": "struct Suschainable.NFT storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "52656420436f6174",
                          "id": 53,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "246:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e79c6e3361769656a5f66a5657348bd9c6d8ff9e862a17d8691926cf34b1051b",
                            "typeString": "literal_string \"Red Coat\""
                          },
                          "value": "Red Coat"
                        },
                        {
                          "hexValue": "412066617368696f6e20636f6174",
                          "id": 54,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "258:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          "value": "A fashion coat"
                        },
                        {
                          "hexValue": "6e756c6c",
                          "id": 55,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "276:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          },
                          "value": "null"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_e79c6e3361769656a5f66a5657348bd9c6d8ff9e862a17d8691926cf34b1051b",
                            "typeString": "literal_string \"Red Coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          }
                        ],
                        "id": 52,
                        "name": "NFT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "242:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_NFT_$41_storage_ptr_$",
                          "typeString": "type(struct Suschainable.NFT storage pointer)"
                        }
                      },
                      "id": 56,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "242:41:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_memory_ptr",
                        "typeString": "struct Suschainable.NFT memory"
                      }
                    },
                    "src": "232:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_NFT_$41_storage",
                      "typeString": "struct Suschainable.NFT storage ref"
                    }
                  },
                  "id": 58,
                  "nodeType": "ExpressionStatement",
                  "src": "232:51:1"
                },
                {
                  "expression": {
                    "id": 67,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 59,
                        "name": "nfts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "290:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
                          "typeString": "mapping(uint256 => struct Suschainable.NFT storage ref)"
                        }
                      },
                      "id": 61,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "295:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "290:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_storage",
                        "typeString": "struct Suschainable.NFT storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "426c756520436f6174",
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "304:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_175509e7e558e1cb0059687ff74dd2288e6de33406debd046e7f18bee4b6943c",
                            "typeString": "literal_string \"Blue Coat\""
                          },
                          "value": "Blue Coat"
                        },
                        {
                          "hexValue": "412066617368696f6e20636f6174",
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "317:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          "value": "A fashion coat"
                        },
                        {
                          "hexValue": "6e756c6c",
                          "id": 65,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "335:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          },
                          "value": "null"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_175509e7e558e1cb0059687ff74dd2288e6de33406debd046e7f18bee4b6943c",
                            "typeString": "literal_string \"Blue Coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          }
                        ],
                        "id": 62,
                        "name": "NFT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "300:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_NFT_$41_storage_ptr_$",
                          "typeString": "type(struct Suschainable.NFT storage pointer)"
                        }
                      },
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "300:42:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_memory_ptr",
                        "typeString": "struct Suschainable.NFT memory"
                      }
                    },
                    "src": "290:52:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_NFT_$41_storage",
                      "typeString": "struct Suschainable.NFT storage ref"
                    }
                  },
                  "id": 68,
                  "nodeType": "ExpressionStatement",
                  "src": "290:52:1"
                },
                {
                  "expression": {
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 69,
                        "name": "nfts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "348:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
                          "typeString": "mapping(uint256 => struct Suschainable.NFT storage ref)"
                        }
                      },
                      "id": 71,
                      "indexExpression": {
                        "hexValue": "32",
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "353:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "348:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_storage",
                        "typeString": "struct Suschainable.NFT storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "477265656e20436f6174",
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "362:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e3e5445478e79e7661559b7aff59db3a7790835f82b602f88bd0eb22ddf7213b",
                            "typeString": "literal_string \"Green Coat\""
                          },
                          "value": "Green Coat"
                        },
                        {
                          "hexValue": "412066617368696f6e20636f6174",
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "376:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          "value": "A fashion coat"
                        },
                        {
                          "hexValue": "6e756c6c",
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "394:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          },
                          "value": "null"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_e3e5445478e79e7661559b7aff59db3a7790835f82b602f88bd0eb22ddf7213b",
                            "typeString": "literal_string \"Green Coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_13ce036fb4925a0915d484599324f81fdbb10ca344beaa243134ef33f2bce5d2",
                            "typeString": "literal_string \"A fashion coat\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_efbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805",
                            "typeString": "literal_string \"null\""
                          }
                        ],
                        "id": 72,
                        "name": "NFT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "358:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_NFT_$41_storage_ptr_$",
                          "typeString": "type(struct Suschainable.NFT storage pointer)"
                        }
                      },
                      "id": 76,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "358:43:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NFT_$41_memory_ptr",
                        "typeString": "struct Suschainable.NFT memory"
                      }
                    },
                    "src": "348:53:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_NFT_$41_storage",
                      "typeString": "struct Suschainable.NFT storage ref"
                    }
                  },
                  "id": 78,
                  "nodeType": "ExpressionStatement",
                  "src": "348:53:1"
                }
              ]
            },
            "id": 80,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:2:1"
            },
            "returnParameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "226:0:1"
            },
            "scope": 96,
            "src": "212:194:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 94,
              "nodeType": "Block",
              "src": "477:42:1",
              "statements": [
                {
                  "expression": {
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 87,
                          "name": "nfts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46,
                          "src": "483:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFT_$41_storage_$",
                            "typeString": "mapping(uint256 => struct Suschainable.NFT storage ref)"
                          }
                        },
                        "id": 89,
                        "indexExpression": {
                          "id": 88,
                          "name": "nftIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 84,
                          "src": "488:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "483:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_NFT_$41_storage",
                          "typeString": "struct Suschainable.NFT storage ref"
                        }
                      },
                      "id": 90,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "498:5:1",
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 40,
                      "src": "483:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 91,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82,
                      "src": "506:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "483:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 93,
                  "nodeType": "ExpressionStatement",
                  "src": "483:31:1"
                }
              ]
            },
            "functionSelector": "3d971534",
            "id": 95,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeOwner",
            "nameLocation": "419:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 82,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "445:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "431:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 84,
                  "mutability": "mutable",
                  "name": "nftIndex",
                  "nameLocation": "460:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "455:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "455:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "430:39:1"
            },
            "returnParameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "477:0:1"
            },
            "scope": 96,
            "src": "410:109:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 97,
        "src": "66:455:1",
        "usedErrors": []
      }
    ],
    "src": "32:490:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.16+commit.07a7930e.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {},
      "links": {},
      "address": "0x7e8cBA298103E1fc5C0c7eBe023924D9b888c8C1",
      "transactionHash": "0xbfd8ad7a0ff38f27351890d468cebdc68ccfedcc6b6bb982eada6cc4d4ae26e7"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-10T19:36:52.070Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}