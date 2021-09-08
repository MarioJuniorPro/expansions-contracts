/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IExample } from "../IExample";

export class IExample__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExample {
    return new Contract(address, _abi, signerOrProvider) as IExample;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "isExample",
        type: "bool",
      },
    ],
    name: "isExample",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];