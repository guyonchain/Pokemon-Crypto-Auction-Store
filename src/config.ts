import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Pokemon Crypto Auction Store",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1t9jl483g2p69lte6q45a40agwfvhp3qkuttjcrtqtsulmvfgzp7snwlfq0",
            cw721: "andr155e8mznq8ajnhq4jmrkxwn0etns2sw3hx0twz2qfdxauxrewkwkst7yxgy",
            name: "Special Editions",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "VENU"
        }
    ],
};

export default CONFIG;
