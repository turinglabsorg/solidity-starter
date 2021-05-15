# Solidity Starter

This is a simple starter to understand how to run a local enviorment of Solidity and start interacting with it.

First of all install Truffle and Ganache (you will need NodeJS):

https://www.trufflesuite.com/docs/truffle/getting-started/installation

https://www.trufflesuite.com/ganache

After you've downloaded both tools just install all the dependencies with:

```yarn install```

And edit the `.env` file according with your Ganache details. You will need to set first:

- `MNEMONIC`: which is reported on top of the Ganache UI
- `OWNER_ADDRESS`: which is the first address

It's all set, now deploy the contract:

```npm run ganache:deploy```

The script will end with something like:

```
Deploying 'tPay'
----------------
> transaction hash:    0xa967c88d73bc2087f4cbe2eb621f1856a9d1f8a3f4a4ad6e575d2a324d5b8263
> Blocks: 0            Seconds: 0
> contract address:    0x3974B18919c38657e6168076Aebc8A203Ee18a37
> block number:        13
> block timestamp:     1621045680
> account:             0xb485e286bB054604778C9660C83DC22eb7538f6d
> balance:             99.84893618
> gas used:            2082121 (0x1fc549)
> gas price:           20 gwei
> value sent:          0 ETH
> total cost:          0.04164242 ETH


> Saving migration to chain.
> Saving artifacts
-------------------------------------
> Total cost:          0.04164242 ETH
```

Copy the contract address (`0x3974B18919c38657e6168076Aebc8A203Ee18a37`) in the `.env` file after `CONTRACT_ADDRESS`.

## Run tests

Now you're able to run tests, for ganache we just need to run following scripts:

- `npm run ganache:mint`: will mint 1.000.000 tokens
- `npm run ganache:details`: will return contract details
- `npm run ganache:transfer`: will transfer some tokens between two accounts
- `npm run ganache:burn`: will burn 500 tokens

## Make changes and deploy to other networks

Now you're able to make changes to the contract, test your own logic and deploy to other networks (like `mumbai`). 
All the networks are managed inside `truffle.js` and you can add mainnets or other testnets from there.

Happy coding! :-)