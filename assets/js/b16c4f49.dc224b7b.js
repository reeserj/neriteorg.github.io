"use strict";(self.webpackChunknerite_docs=self.webpackChunknerite_docs||[]).push([[762],{9985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-docs/redemption-and-delegation","title":"Redemptions and Delegation","description":"What are redemptions?","source":"@site/docs/user-docs/redemption-and-delegation.md","sourceDirName":"user-docs","slug":"/user-docs/redemption-and-delegation","permalink":"/docs/user-docs/redemption-and-delegation","draft":false,"unlisted":false,"editUrl":"https://github.com/NeriteOrg/neriteorg.github.io/docs/user-docs/redemption-and-delegation.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"USDN & Earn","permalink":"/docs/user-docs/usdn-and-earn"},"next":{"title":"NERI Staking & Voting","permalink":"/docs/user-docs/NERI-staking-and-voting"}}');var i=r(4848),a=r(8453);const s={sidebar_position:4},o="Redemptions and Delegation",d={},l=[{value:"What are redemptions?",id:"what-are-redemptions",level:3},{value:"What happens if two Troves have the same IR? <a></a>",id:"what-happens-if-two-troves-have-the-same-ir-",level:3},{value:"When can redemptions occur? <a></a>",id:"when-can-redemptions-occur-",level:3},{value:"Who can initiate a redemption? <a></a>",id:"who-can-initiate-a-redemption-",level:3},{value:"What happens if my Trove gets redeemed?",id:"what-happens-if-my-trove-gets-redeemed",level:3},{value:"How do redemptions work using three collateral assets? <a></a>",id:"how-do-redemptions-work-using-three-collateral-assets-",level:3},{value:"How is the collateral split determined?",id:"how-is-the-collateral-split-determined",level:3},{value:"Is there a redemption fee?",id:"is-there-a-redemption-fee",level:3},{value:"How can I stay protected?",id:"how-can-i-stay-protected",level:3},{value:"What is delegation of interest rates?",id:"what-is-delegation-of-interest-rates",level:3},{value:"Who are the current active interest rate delegates? <a></a>",id:"who-are-the-current-active-interest-rate-delegates-",level:3},{value:"What happens if there are issues with the smart contract for delegating interest rates?",id:"what-happens-if-there-are-issues-with-the-smart-contract-for-delegating-interest-rates",level:3},{value:"Why are redemptions not a feature of both LTV &amp; interest rate, but only interest rate?",id:"why-are-redemptions-not-a-feature-of-both-ltv--interest-rate-but-only-interest-rate",level:3},{value:"What&#39;s the difference in redemption fees charged between Liquity V1 and V2?",id:"whats-the-difference-in-redemption-fees-charged-between-liquity-v1-and-v2",level:3},{value:"What happens when redemptions cause a debt of a Trove to fall below the minimum amount?",id:"what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount",level:3},{value:"How to redeem USDN for collateral (mix of ETH, rETH and wstETH) using Etherscan",id:"how-to-redeem-usdn-for-collateral-mix-of-eth-reth-and-wsteth-using-etherscan",level:3}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"redemptions-and-delegation",children:"Redemptions and Delegation"})}),"\n",(0,i.jsx)(t.h3,{id:"what-are-redemptions",children:"What are redemptions?"}),"\n",(0,i.jsx)(t.p,{children:"Redemptions serve the crucial purpose of keeping USDN pegged to the value of a dollar, creating a price floor around $0.9945. They do this in a decentralized way without reliance on centralized assets, oracles, or 3rd parties."}),"\n",(0,i.jsx)(t.p,{children:"A redemption is essentially swapping USDN for ETH/LST at face value, as if 1 USDN is exactly worth $1.00. Redemptions can be initiated by anyone, but are only profitable when USDN is less than $1."}),"\n",(0,i.jsxs)(t.p,{children:["The redeemer sends USDN to the protocol and in return  gets a mix of WETH, wstETH and rETH (minus the redemption fee). The redeemed amount is split among the different collateral assets based on their current Stability Pool backing (see ",(0,i.jsx)(t.a,{href:"#how-is-the-collateral-split-determined",children:"link"})," for more info)."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/light - BOLD individual redemption.png",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(t.p,{children:"Redemptions start from the borrower paying the least interest."}),"\n",(0,i.jsxs)(t.p,{children:["Read more about how to ",(0,i.jsx)(t.a,{href:"#how-can-i-stay-protected",children:"protect yourself"})," from redemptions and what happens if ",(0,i.jsx)(t.a,{href:"#what-happens-if-my-trove-gets-redeemed",children:"you are redeemed"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also watchi this ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=CQVmjFx987A",children:"9 min video"})," on redemptions."]}),"\n",(0,i.jsxs)(t.h3,{id:"what-happens-if-two-troves-have-the-same-ir-",children:["What happens if two Troves have the same IR? ",(0,i.jsx)("a",{href:"#docs-internal-guid-85409cf3-7fff-2712-b20f-92b229718cbb",id:"docs-internal-guid-85409cf3-7fff-2712-b20f-92b229718cbb"})]}),"\n",(0,i.jsx)(t.p,{children:'In this case, the "Last In, First Out" (LIFO) principle applies, meaning the Trove that set its interest rate more recently will be redeemed first.'}),"\n",(0,i.jsxs)(t.h3,{id:"when-can-redemptions-occur-",children:["When can redemptions occur? ",(0,i.jsx)("a",{href:"#docs-internal-guid-85409cf3-7fff-2712-b20f-92b229718cbb",id:"docs-internal-guid-85409cf3-7fff-2712-b20f-92b229718cbb"})]}),"\n",(0,i.jsx)(t.p,{children:"A redemption can occur at any time, but will likely only happen when it is profitable to do so. This is usually the case when the price of USDN is less than $1 (minus the current redemption fee)."}),"\n",(0,i.jsxs)(t.h3,{id:"who-can-initiate-a-redemption-",children:["Who can initiate a redemption? ",(0,i.jsx)("a",{href:"#docs-internal-guid-595b4008-7fff-7d35-9a38-68d9e7feef1a",id:"docs-internal-guid-595b4008-7fff-7d35-9a38-68d9e7feef1a"})]}),"\n",(0,i.jsx)(t.p,{children:"Any Ethereum address can initiate a redemption, provided that they have a sufficient amount of USDN to do so. However, we expect redemptions to be mainly performed by professional bots rather than humans."}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-if-my-trove-gets-redeemed",children:"What happens if my Trove gets redeemed?"}),"\n",(0,i.jsx)(t.p,{children:"You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral in return."}),"\n",(0,i.jsx)(t.p,{children:"If your collateral (ETH or LST) is redeemed, an equivalent amount of your debt in USD terms is repaid. The redeemer receives your collateral, less the redemption fee, which remains  in your Trove. This means that at the time of redemption you have not lost any money in USD terms, likely even made a small gain with the received redemption fee as the peg recovers."}),"\n",(0,i.jsx)(t.p,{children:"Example with ETH at $3'000:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Before the redemption: 10 ETH collateral, 20'000 USDN debt."}),"\n",(0,i.jsx)(t.li,{children:"After the redemption: 5.025 ETH collateral, 5'000 USDN debt."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can see your collateral and debt reduced equally (in USD terms) and the redemption fee (0.025 ETH) being added to your collateral value."}),"\n",(0,i.jsxs)(t.p,{children:["Partially affected Troves whose debt stays above the minimum debt threshold of 2000 USDN continue to work as before, while Troves whose debt is reduced to a lesser amount (or 0) switch to a dormant operating mode (see below for ",(0,i.jsx)(t.a,{href:"#what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount",children:"more"})," info)."]}),"\n",(0,i.jsxs)(t.h3,{id:"how-do-redemptions-work-using-three-collateral-assets-",children:["How do redemptions work using three collateral assets? ",(0,i.jsx)("a",{href:"#docs-internal-guid-6cda6d73-7fff-78b8-1c4f-6cb96385a98a",id:"docs-internal-guid-6cda6d73-7fff-78b8-1c4f-6cb96385a98a"})]}),"\n",(0,i.jsx)(t.p,{children:"In contrast to LUSD, USDN is backed by a multitude of collaterals. Instead of letting the redeemer freely choose the collateral to redeem, Liquity V2 optimizes the process for economic safety. Redemptions are thus serviced through a collateral mix in a way that enhances the overall backing of USDN."}),"\n",(0,i.jsx)(t.p,{children:"The process starts with the Troves paying the lowest interest rates in each collateral market and continues until the full amount of USDN is exchanged for collateral assets. Redemptions can be partial or full, as illustrated below."}),"\n",(0,i.jsx)(t.p,{children:"In this example, the rETH market shows a full redemption of the first Trove and a partial redemption of the second. The wstETH and ETH markets have one partial and two full redemptions, respectively"}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/assets/redemption split 2.png",alt:""}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("p",{children:"Example redemption across all three collateral markets"})})]}),"\n",(0,i.jsx)(t.h3,{id:"how-is-the-collateral-split-determined",children:"How is the collateral split determined?"}),"\n",(0,i.jsx)(t.p,{children:"The split is dynamic, optimizing for the economic safety of the system. The logic is straightforward: the riskier a collateral is, the more redemption volume is directed to that market. In other words, if a market's Stability Pool is relatively small compared to its total debt, it's considered riskier, as there's a higher likelihood of bad debt occurring in extreme events."}),"\n",(0,i.jsx)(t.p,{children:'To mitigate this risk, the system redeems proportionally to the "outside debt" of each collateral type. This is calculated as the total debt borrowed against a specific collateral minus the size of the Stability Pool for that borrowing market.'}),"\n",(0,i.jsx)(t.p,{children:"Here is an example: given outside debt amounts of 100 USDN, 50 USDN and 100 USDN respectively, a redemption will result in a 40% (WETH), 20% (wstETH) and 40% (rETH) split."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/assets/redeem2.png",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(t.h3,{id:"is-there-a-redemption-fee",children:"Is there a redemption fee?"}),"\n",(0,i.jsx)(t.p,{children:"Yes. The redemption fee mechanics are broadly the same as in Liquity V1, but with adapted parametrization leading to a faster fee decay. The redemption fee is taken as a cut of the total ETH/LST drawn from the system in a redemption. Contrary to V1, the fee does not go to the LQTY stakers but stays with the users as part of their collateral."}),"\n",(0,i.jsxs)(t.p,{children:["Redemption fees are based on the ",(0,i.jsx)(t.code,{children:"baseRate"})," state variable, which is dynamically updated. The ",(0,i.jsx)(t.code,{children:"baseRate"})," increases with each redemption, and exponentially decays according to time passed since the last redemption (half-life of 6 hours)."]}),"\n",(0,i.jsxs)(t.p,{children:["Upon each redemption of x USDN: ",(0,i.jsx)(t.code,{children:"baseRate"})," is decayed based on time passed since the last fee event and incremented by an amount proportional to the fraction of the total USDN supply to be redeemed, i.e. ",(0,i.jsx)(t.code,{children:"x/total_bold_supply"})]}),"\n",(0,i.jsxs)(t.p,{children:["The redemption fee percentage is given by ",(0,i.jsx)(t.code,{children:"min (0.5%  + baseRate, 100%)"}),"."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/assets/redem.png",alt:""}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("p",{children:"The redemption fee (red line) follows this dynamic over time as redemptions occur (blue bars)."})})]}),"\n",(0,i.jsx)(t.h3,{id:"how-can-i-stay-protected",children:"How can I stay protected?"}),"\n",(0,i.jsx)(t.p,{children:"The risk of redemption depends on two factors: the interest rate you set and the price of USDN."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The interest rate"})," you set determines how much USDN must be redeemed before it's your turn.  The higher your rate, the more USDN is redeemable before you, and vice versa."]}),"\n",(0,i.jsx)(t.p,{children:"You can see this on any frontned, in the example below the number is 41M."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/assets/rerwere.png",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(t.p,{children:"This means that 41M USDN must be removed from the system before it would reach you. However, this number is relative, and you also need to consider recent redemption activity. While past events don't guarantee future outcomes, they can serve as a useful guide."}),"\n",(0,i.jsx)(t.p,{children:"For example, if only 200K USDN were redeemed in the last week, you're comparatively safer than if 15M were redeemed."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The price of USDN"})," is the second crucial factor. When it trades above $1, redemptions become unprofitable and should cease. If demand for USDN is strong, it could maintain a price above $1 for an extended period."]}),"\n",(0,i.jsx)(t.p,{children:"During such times, you can comfortably reduce the interest rate you're paying without increasing your risk of redemption."}),"\n",(0,i.jsx)(t.h3,{id:"what-is-delegation-of-interest-rates",children:"What is delegation of interest rates?"}),"\n",(0,i.jsx)(t.p,{children:"Interest rate delegation is a feature in Liquity V2 that allows borrowers to delegate the management of their interest rate to a third party. This enables them to create a passive, hands-off position, while still keeping a competitive rate and low redemption risk."}),"\n",(0,i.jsx)(t.p,{children:"There are three types of delegations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To a third party manager: A specialized entity which provides predetermined strategies for batches of multiple Troves and charges a fee for the service"}),"\n",(0,i.jsx)(t.li,{children:"To an automated and decentralized contract strategy: A predefined strategy managing interest rates in an autonomous manner"}),"\n",(0,i.jsx)(t.li,{children:"To your own wallet: Delegate to a hot wallet when on vacation, or to a friend"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It is important to note that a delegate or contract strategy can do nothing else but set the interest rate in a predetermined range, significantly limiting the risks of the borrowers."}),"\n",(0,i.jsx)(t.p,{children:"Borrowers should thus keep an eye on the interest rate range and the maximum update frequency (relevant in case of premature adjustments) preset by the manager."}),"\n",(0,i.jsxs)(t.h3,{id:"who-are-the-current-active-interest-rate-delegates-",children:["Who are the current active interest rate delegates? ",(0,i.jsx)("a",{href:"#docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597",id:"docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597"})]}),"\n",(0,i.jsx)(t.p,{children:"Coming soon."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Entity"}),(0,i.jsx)(t.th,{children:"Collateral Asset"}),(0,i.jsx)(t.th,{children:"Delegate Address"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Note that Liquity AG is not responsible for the actions of any delegates. Please do your own research."})}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-if-there-are-issues-with-the-smart-contract-for-delegating-interest-rates",children:"What happens if there are issues with the smart contract for delegating interest rates?"}),"\n",(0,i.jsx)(t.p,{children:"Your Trove would not be affected - the only thing would get affected is the interest rate at which your position is set."}),"\n",(0,i.jsx)(t.h3,{id:"why-are-redemptions-not-a-feature-of-both-ltv--interest-rate-but-only-interest-rate",children:"Why are redemptions not a feature of both LTV & interest rate, but only interest rate?"}),"\n",(0,i.jsxs)(t.p,{children:["Given that the ",(0,i.jsx)(t.em,{children:"raison d'etre"})," for redemptions is to diminish USDN supply in response to reduced demand, and interest rates drive demand, rate-based redemption processing is a more sustainable and effective lever to reach market equilibrium. Actively managing for both interest rate and LTV would weaken the ability to enforce market-level interest rates and deposit yields, while complicating the process for the system and its users"]}),"\n",(0,i.jsx)(t.h3,{id:"whats-the-difference-in-redemption-fees-charged-between-liquity-v1-and-v2",children:"What's the difference in redemption fees charged between Liquity V1 and V2?"}),"\n",(0,i.jsx)(t.p,{children:"In v2, when borrowers are affected by redemptions, the redemption fee charged to the redeemer stays within the affected Troves instead of being diverted as in Liquity."}),"\n",(0,i.jsxs)(t.p,{children:["So, in Liquity the ",(0,i.jsx)(t.code,{children:"borrower_loss = redemption_fee + redeemer_gain"}),", while in Bold it's ",(0,i.jsx)(t.code,{children:"borrower_loss = redeemer_gain"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount",children:"What happens when redemptions cause a debt of a Trove to fall below the minimum amount?"}),"\n",(0,i.jsx)(t.p,{children:"If the redeemed amount exceeds the debt of an affected Trove, it doesn't get closed as in Liquity V1, but remains open with 0 USDN debt and the remaining collateral. The owner of a fully redeemed Trove may close it by withdrawing the remaining collateral, or borrow anew to bring its debt above the minimum of 2000 USDN, topping up its collateral if needed."}),"\n",(0,i.jsx)(t.p,{children:"In the scenario that the redeemed amount of a Trove does not exceed the debt of a Trove, but would leave it between 0 and 2000 USDN, the Trove would remain open with the remaining debt, and the remaining collateral. The owner of the Trove may close it by paying off the remaining debt and withdrawing the remaining collateral, or borrow anew as described above."}),"\n",(0,i.jsx)(t.h3,{id:"how-to-redeem-usdn-for-collateral-mix-of-eth-reth-and-wsteth-using-etherscan",children:"How to redeem USDN for collateral (mix of ETH, rETH and wstETH) using Etherscan"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,i.jsx)(t.p,{children:"To redeem USDN you first have to give the CollateralRegistry contract an approval to use your USDN using the approve() function of the USDN token contract."}),"\n",(0,i.jsxs)(t.p,{children:['After connecting your wallet through "Connect to Web3", set',(0,i.jsx)(t.br,{}),"\n","spender to ",(0,i.jsx)(t.code,{children:"CollateralRegistry address"}),"and the amount to be at least as high as the amount you wish to redeem, adding 18 zeros."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example for 1000 USDN:"})}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/assets/red1.png",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),(0,i.jsx)(t.br,{}),"\n","You can now redeem USDN using the ",(0,i.jsx)(t.code,{children:"CollateralRegistry"})," contract:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"#",children:"(insert CollateralRegistry address after deployment)"}),"Simply input the USDN amount to redeem, the redemption fee percentage you are willing to accept and the maximum number of list iterations per collateral (limits the number of troves whose debt can be repaid on each branch)."]}),"\n",(0,i.jsx)(t.p,{children:"Note: The redemption fee must be higher than the current fee."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"_boldAmount:"})," amount to redeem * 1e18"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"_maxIterationsPerCollateral:"})," 0"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"_maxFeePercentage:"})," 1% * 1e16, i.e. 1000000000000000000"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/static/img/red2 (1).png",alt:""}),(0,i.jsx)("figcaption",{})]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(6540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);