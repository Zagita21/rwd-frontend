import {Script} from "./script";

export class Wallet {
    public user: string = "freeloaderz";
    public sending_stake_addr: string;
    public sending_wal_addrs: Array<string> = [];
    public inputs: Array<string> = [];
    public excludes: Array<string> = [];
    public collateral: Array<string> = [];
    public script: Script;
    public network: number;
    public balance: number;

    constructor(data: any) {
        if (data != null) {
            if (data.sending_stake_addr) {
                this.sending_stake_addr = data.sending_stake_addr;
            }
            if (data.sending_wal_addrs) {
                data.sending_wal_addrs.foreach((addrs) => {
                    this.sending_wal_addrs.push(addrs);
                });
            }
            if (data.inputs) {
                data.inputs.foreach((input) => {
                    this.inputs.push(input);
                });
            }
            if (data.excludes) {
                data.excludes.foreach((exclude) => {
                    this.excludes.push(exclude);
                });
            }
            if (data.collateral) {
                data.collateral.foreach((collateral) => {
                    this.collateral.push(collateral);
                });
            }
            if (data.script) {
                this.script = new Script(data.script);
            }
            if (data.network) {
                this.network = +data.network;
            }
            if (data.balance) {
                this.balance = +data.balance;
            }
        }
    }
}


const example = {
    "user": "freeloaderz",
    "sending_stake_addr": "e030b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b",
    "sending_wal_addrs": ["00f81aecb5b5d743fbf2310798b5da6cf3291d6e9a8da9cb57935cd8ff30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b", "003260a88e284232a4d1e64c39cf72b32d870646b30dac0c85e010e82830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b", "0022bc86426745338f0b9267650f559c2883f9ed29c39af7c5025c178e30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b"],

    "inputs": [
        "82825820bf626b740f61338108e440cee1afbeb2c91e34412341bcef9f98c1e9b44891b1028258390015105d61edfb513e285296a5a56d5166a687aa18322f0708c605910330b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001e8480a1581c22c3b86a5b88a78b5de52f4aed2831d1483b3b7681f1ee2569538130a15820016dee4ce565a31af501894406ec61d78a87f0c53de1e7cc6d52d156b3f5b1551a7a73050f"
        , "82825820dd71f4aedb53f8fbb51b79ef661a44994959fee2abaa8997daaf053ceb9a3c7a00825839007e72bf5ae4e180295691ab24a13aff8b0d2976c58a5d4ddaf2dec74830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030303801"
        , "828258200a891ab678250ab84b59a236da3c6efa583620350d69aa0b85628ebab385515202825839008498ab513ec38328bcbded32db0cdf7b550a79bee831fc0f44caa21530b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030363301"
        , "828258209ceb3d1bfe4050cf37d202e23c21b7f89866980b08a1b92b82f3f0f48c22e1e9048258390034c0d09ca4bcb42bc3e36ec054941daeafc829be7147ca241ef7d95c30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001e8480a1581c22c3b86a5b88a78b5de52f4aed2831d1483b3b7681f1ee2569538130a1582001775459ea42d155094e18c52697cb27fc802b8d4c51dcfde67432ef055863441a01743e58"
        , "8282582015601df49355e747c64a2fd614d9ff43a040302c71f86f57383523a11f2f33870282583900fd159c281652dc215d329974e11f53893a2382c183007245eb1d4bd830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001e8480a1581c126b8676446c84a5cd6e3259223b16a2314c5676b88ae1c1f8579a8fa144744d494e1a000aa8db"
        , "82825820f341324a8c6bc82ea39f67fe65768ee0052deaa3f416929be0a360715ed3748200825839007e72bf5ae4e180295691ab24a13aff8b0d2976c58a5d4ddaf2dec74830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030303301"
        , "8282582079fb941b125526e39a1f9b228637ddaaeeb065507775d5abd7be1f5974c4ba7c02825839007e72bf5ae4e180295691ab24a13aff8b0d2976c58a5d4ddaf2dec74830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303033393201"
        , "8282582079fb941b125526e39a1f9b228637ddaaeeb065507775d5abd7be1f5974c4ba7c03825839007e72bf5ae4e180295691ab24a13aff8b0d2976c58a5d4ddaf2dec74830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a0348f071"
        , "8282582039e1c53a729bdae147a05dde99006d8247c5614f047f81df6e67beba79df345402825839007e72bf5ae4e180295691ab24a13aff8b0d2976c58a5d4ddaf2dec74830b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dca1534d79546573746e65745472313030303030313101"
        , "82825820da1d5ae96713a8c9b1cb1ca35eb7216cf0427bc3581334b7504d4760ff6b8a0a02825839008498ab513ec38328bcbded32db0cdf7b550a79bee831fc0f44caa21530b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303033373101"
        , "82825820a820333613b645533e81fe8570f11b821c55b1a9890d5a2178c9105b536dd4ae02825839008498ab513ec38328bcbded32db0cdf7b550a79bee831fc0f44caa21530b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303033363401"
        , "82825820792d2703910be183825a938033154a7c4c9d05e4c17e5940c8291d76b6fa3f9701825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a0019479fa1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca2554172746966637473546573744e667430303032363701554172746966637473546573744e667430303032363801"
        , "82825820e117e086ce9cc0d6013d8f6a00f71f35e88da12f8c44488c1904b657a0fdbd100282583900a787acf7cfcaef136072ca42c3915761d18ccc683029c55fe680210f30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030383801"
        , "82825820600be84968852d3457905b743143ef983c1323b262d2720ba50cd0ed5994b733028258390068fba5e7dd28233c56f7843f5ed38f346dae8167dfc2ce57cf9f691e30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303032373701"
        , "82825820bf631bd8006c24176b42c68b9c9edcc7302bf28c71b53070e3268b9eb9e97f11028258390068fba5e7dd28233c56f7843f5ed38f346dae8167dfc2ce57cf9f691e30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303032383901"
        , "82825820bf631bd8006c24176b42c68b9c9edcc7302bf28c71b53070e3268b9eb9e97f11038258390068fba5e7dd28233c56f7843f5ed38f346dae8167dfc2ce57cf9f691e30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a438a607d"
        , "828258202399a0de3bcf86c0d2ece7818cc4b2ac7fca1864151dce6a32b2e8f3f712f0ec02825839006329ac5ac03f623dbbe8cdbca81656ee5fb476fbcb485b8ffbda114230b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581cdd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9a1564172746966637454657374546f6b656e30303030343301"
        , "8282582068783898ce2cfa0a176ed06b4fd64ae11cf412e464785bec6eb557a10bd1164902825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a0081f5bea1581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dcb8394f5465737454726f6c6c303030303430014f5465737454726f6c6c303030303431014f5465737454726f6c6c303030303433014f5465737454726f6c6c303030303434014f5465737454726f6c6c303030303435014f5465737454726f6c6c303030303436014f5465737454726f6c6c303030303437014f5465737454726f6c6c303030303438014f5465737454726f6c6c303030303439014f5465737454726f6c6c303030303530014f5465737454726f6c6c303030303531014f5465737454726f6c6c303030303532014f5465737454726f6c6c303030313030014f5465737454726f6c6c303030313031014f5465737454726f6c6c303030313032014f5465737454726f6c6c303030313033014f5465737454726f6c6c303030313034014f5465737454726f6c6c303030313035014f5465737454726f6c6c303030313036014f5465737454726f6c6c303030313037014f5465737454726f6c6c30303031303801534d79546573746e65745472303030303030303101534d79546573746e65745472303030303030303201534d79546573746e65745472303030303030303301534d79546573746e65745472303030303030303401534d79546573746e65745472303030303030303501534d79546573746e65745472303030303030303601534d79546573746e65745472303030303030303701534d79546573746e65745472303030303030303801534d79546573746e65745472303030303030303901534d79546573746e65745472303030303030313001534d79546573746e65745472303030303030313101534d79546573746e65745472303030303030313201534d79546573746e65745472303030303030313301534d79546573746e65745472303030303030313401534d79546573746e65745472303030303030313501534d79546573746e65745472303030303030313601534d79546573746e65745472303030303031323501534d79546573746e65745472303030303031323601534d79546573746e65745472303030303031323701534d79546573746e65745472303030303031323801534d79546573746e65745472303030303031323901534d79546573746e65745472303030303031333001534d79546573746e65745472303030303031333101534d79546573746e65745472303030303031333201534d79546573746e65745472303030303031333301534d79546573746e65745472303030303031333401534d79546573746e65745472303030303031333501534d79546573746e65745472303030303031333601534d79546573746e65745472303030303031333701534d79546573746e65745472303030303031333801534d79546573746e65745472303030303031333901534d79546573746e65745472303030303031363101534d79546573746e65745472303030303031363201534d79546573746e65745472303030303031363301534d79546573746e65745472303030303032333401534d79546573746e65745472303030303032333501"
        , "8282582068783898ce2cfa0a176ed06b4fd64ae11cf412e464785bec6eb557a10bd1164903825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a007f5444a1581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dcb835534d79546573746e65745472303030303032333601534d79546573746e65745472303030303032333701534d79546573746e65745472303030303032333801534d79546573746e65745472303030303032333901534d79546573746e65745472303030303032343001534d79546573746e65745472303030303032343101534d79546573746e65745472303030303032343201534d79546573746e65745472303030303032343301534d79546573746e65745472303030303032343401534d79546573746e65745472303030303032343501534d79546573746e65745472303030303032343601534d79546573746e65745472303030303032343701534d79546573746e65745472303030303032343801534d79546573746e65745472303030303032353201534d79546573746e65745472303030303032353301534d79546573746e65745472303030303032353401534d79546573746e65745472303030303032353501534d79546573746e65745472303030303032353601534d79546573746e65745472303030303032353701534d79546573746e65745472303030303032353801534d79546573746e65745472303030303032353901534d79546573746e65745472303030303032363001534d79546573746e65745472303030303032363101534d79546573746e65745472303030303032363201534d79546573746e65745472303030303032363301534d79546573746e65745472303030303032363401534d79546573746e65745472303030303032363501534d79546573746e65745472303030303032363601534d79546573746e65745472303030303032363701534d79546573746e65745472303030303032363801534d79546573746e65745472303030303032363901534d79546573746e65745472303030303032373001534d79546573746e65745472303030303033303301534d79546573746e65745472303030303033303401534d79546573746e65745472303030303033303501534d79546573746e65745472303030303033303601534d79546573746e65745472303030303033303701534d79546573746e65745472303030303033303801534d79546573746e65745472303030303033303901534d79546573746e65745472303030303033313001534d79546573746e65745472303030303033313101534d79546573746e65745472303030303033313201534d79546573746e65745472303030303033313301534d79546573746e65745472303030303033313401534d79546573746e65745472303030303033313501534d79546573746e65745472303030303033313601534d79546573746e65745472303030303033313701534d79546573746e65745472303030303033313801534d79546573746e65745472303030303033313901534d79546573746e65745472313030303030343401534d79546573746e65745472313030303030343501534d79546573746e65745472313030303030343601534d79546573746e65745472313030303030343701"
        , "82825820ae6de4063031c6659f7a1e07ab84274dc54dfa60592b0dc58bbbcfe78642506a01825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a012f5ce1a1581cdd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9a9564172746966637454657374546f6b656e30303030333801564172746966637454657374546f6b656e30303032303501564172746966637454657374546f6b656e30303032363101564172746966637454657374546f6b656e30303032363201564172746966637454657374546f6b656e30303032363501564172746966637454657374546f6b656e30303032363601564172746966637454657374546f6b656e30303032373601564172746966637454657374546f6b656e30303032383001564172746966637454657374546f6b656e30303033323301"
        , "82825820a6e8a30a882f935db2427786e9ebb79d0dffbfc3f0117a2c96a8c536b4c810d101825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a01cca645a2581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dcb82c534d79546573746e65745472313030303030343801534d79546573746e65745472313030303030343901534d79546573746e65745472313030303030353001534d79546573746e65745472313030303030353101534d79546573746e65745472313030303030353201534d79546573746e65745472313030303030353301534d79546573746e65745472313030303030353401534d79546573746e65745472313030303030353501534d79546573746e65745472313030303030353701534d79546573746e65745472313030303030353801534d79546573746e65745472313030303030353901534d79546573746e65745472313030303030363001534d79546573746e65745472313030303030363101534d79546573746e65745472313030303030363201534d79546573746e65745472313030303030363301534d79546573746e65745472313030303030363401534d79546573746e65745472313030303030363501534d79546573746e65745472313030303030363601534d79546573746e65745472313030303030363701534d79546573746e65745472313030303030363801534d79546573746e65745472313030303030363901534d79546573746e65745472313030303030373001534d79546573746e65745472313030303030373101534d79546573746e65745472313030303030373201534d79546573746e65745472313030303030373301534d79546573746e65745472313030303030373401534d79546573746e65745472313030303030373501534d79546573746e65745472313030303030373601534d79546573746e65745472313030303030373701534d79546573746e65745472313030303030373801534d79546573746e65745472313030303030373901534d79546573746e65745472313030303030383001534d79546573746e65745472313030303032383001534d79546573746e65745472313030303032383101534d79546573746e65745472313030303032383201534d79546573746e65745472313030303032383301534d79546573746e65745472313030303032383401534d79546573746e65745472313030303032383501564a616e65576174657253636f7574303030303030323901564a616e65576174657253636f7574303030303030333401564a616e65576174657253636f7574303030303030333702564a616e65576174657253636f7574303030303030333802564a616e65576174657253636f7574303030303030343001564a616e65576174657253636f7574303030303030343101581cdd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9a5564172746966637454657374546f6b656e30303030303101564172746966637454657374546f6b656e30303030303201564172746966637454657374546f6b656e30303030313401564172746966637454657374546f6b656e30303030313501564172746966637454657374546f6b656e30303030313701"
        , "82825820277d56504f80e3d5f7468389bed6457d09b651254cc4e584ad45d3c44f1154df01825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a5dcce1d1"
        , "828258204b73f93dee2f12cad2af019761e72b36b4dc9d852c2906c37fddda6b6462812f01825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a0143bf93a3581c126b8676446c84a5cd6e3259223b16a2314c5676b88ae1c1f8579a8fa144744d494e1a005f3095581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832cb826554172746966637473546573744e667430303030313701554172746966637473546573744e667430303030313801554172746966637473546573744e667430303030323001554172746966637473546573744e667430303030323201554172746966637473546573744e667430303030323401554172746966637473546573744e667430303030323501554172746966637473546573744e667430303030323601554172746966637473546573744e667430303030323701554172746966637473546573744e667430303030323801554172746966637473546573744e667430303030323901554172746966637473546573744e667430303030333101554172746966637473546573744e667430303030333201554172746966637473546573744e667430303030333301554172746966637473546573744e667430303030333401554172746966637473546573744e667430303030333501554172746966637473546573744e667430303030333601554172746966637473546573744e667430303030333701554172746966637473546573744e667430303030333801554172746966637473546573744e667430303030333901554172746966637473546573744e667430303030343001554172746966637473546573744e667430303030343101554172746966637473546573744e667430303030343201554172746966637473546573744e667430303030343301554172746966637473546573744e667430303030343501554172746966637473546573744e667430303030343601554172746966637473546573744e667430303030343701554172746966637473546573744e667430303030343801554172746966637473546573744e667430303030343901554172746966637473546573744e667430303030353001554172746966637473546573744e667430303030353301554172746966637473546573744e667430303030353501554172746966637473546573744e667430303030373701554172746966637473546573744e667430303030373801554172746966637473546573744e667430303030373901554172746966637473546573744e667430303030383001554172746966637473546573744e667430303030383101554172746966637473546573744e667430303030383201554172746966637473546573744e667430303030383301581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dca84f5465737454726f6c6c303030303332014f5465737454726f6c6c303030303333014f5465737454726f6c6c303030303334014f5465737454726f6c6c303030303335014f5465737454726f6c6c303030303336014f5465737454726f6c6c303030303337014f5465737454726f6c6c303030303338014f5465737454726f6c6c30303030333901"
        , "82825820fb79e1c8e78e6b0e131adaaeb3121c362ac90d86dea6ae646f6196b2bf7f961d01825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a00159282a1581c79e78a324e27842aa2ccaa21a710198b1db2c2a835b70d663b68a9dca1544a616e65576174657253636f757430303030363501"
        , "828258203845b3506408ecc6339a1cc309fa3a61747c812981ee8166cf46a241b5dac9d500825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030323101"
        , "828258203845b3506408ecc6339a1cc309fa3a61747c812981ee8166cf46a241b5dac9d501825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a00159282a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030323301"
        , "82825820de6cbe29d8bc41d35c37520a0da7d2605860f4062f67c40c9a635f3963ad95cb00825839001c073f4d0823a6e473751f146507935369c7172b94897954e111b6b130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a001e8480"
        , "82825820be7420733ef1e13a68f1dab514b6765d8635262bdbf0501b5995fb0f9a32f50202825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303032303301"
        , "82825820abfeaaca167623a3f7d1bd78c5a2828b81b02623ccd4c8d0bd90f2c62ceb45a50082583900910dc58adb44a4dab0fdfb9942baf68d908ba13695ad6d96b6720f9130b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303030353601"
        , "82825820b95211bf9d92793924de5f632e71d7014f5499a890b93415f6c28cb57be566f000825839006329ac5ac03f623dbbe8cdbca81656ee5fb476fbcb485b8ffbda114230b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b821a001ad576a1581c517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832ca1554172746966637473546573744e667430303032343601"
        , "82825820b95211bf9d92793924de5f632e71d7014f5499a890b93415f6c28cb57be566f001825839005737ba1dde26203a6b2c3bd237338e7600efbc231beedf83daf2d9ac30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a00f07e9f"
    ],
    "excludes": ["82825820bc0395aba5a1f2fafeb470f518bc7738ee76f229c989d329be59598d9eb4210d0082583900fa6614257114e8f453cf20e37753ecc73dc3f7323808b2396990e17a30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a004c4b40"],
    "collateral": ["82825820bc0395aba5a1f2fafeb470f518bc7738ee76f229c989d329be59598d9eb4210d0082583900fa6614257114e8f453cf20e37753ecc73dc3f7323808b2396990e17a30b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b1a004c4b40"],
    "script": {
        "Marketplace": {
            "tokens": [{
                "tokenname": "4172746966637454657374546f6b656e303030323033",
                "currencysymbol": "dd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9",
                "fingerprint": "",
                "amount": 1
            },
                {
                    "tokenname": "4172746966637454657374546f6b656e303030323034",
                    "currencysymbol": "dd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9",
                    "fingerprint": "",
                    "amount": 1
                }
            ],
            "metadata": [
                "3435303030303030",
                "bae29468a207f24428dabbf5b5d8fcb699002cea33d6381672851a31",
                "30",
                "1ed9a5cd8796440d22d11198046cf8a680e634ff564a5b40eb3b2830",
                "517cfcde73912db9a4385adc3da8515cb6361b78ca0e5a97d66f832c",
                "4172746966637473546573744e6674303030303032",
                "616464725f7374616b65316e3264347478667374336632646e38766764676b",
                "6e336530717939616c63356d766b766d326b63337066706779776d61736668",
                "617274696663742d636c692d417274694c42554376312e302e30"
            ],
            "royalties_addr": "000e5a9d20e9a5b16c5c1879368422b6c864d512ba5a8ccc40bfdaae4030b592cedfb75533b2dc0cec3dee1c893e23adaa3379f757046dde0b",
            "royalties_rate": 0.2,
            "selling_price": 20000000
        }

    },
    "network": 0
};