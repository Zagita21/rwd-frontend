import {TokenClaim} from "./token-claim";

export class SpoRewardClaim {
    public reward_tokens: Array<TokenClaim> = [];
    public recipient_stake_addr: string;
    public recipient_payment_addr: number;

    constructor(data: any) {
        if (data != null) {
            if (data.tokens) {
                data.tokens.foreach((token) => {
                    this.reward_tokens.push(new TokenClaim(token));
                });
            }
            if (data.recipient_stake_addr) {
                this.recipient_stake_addr = data.recipient_stake_addr;
            }
            if (data.recipient_payment_addr) {
                this.recipient_payment_addr = +data.recipient_payment_addr;
            }

        }
    }
}