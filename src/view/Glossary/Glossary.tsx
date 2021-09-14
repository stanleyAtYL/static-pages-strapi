import React, {Component, useEffect, useState, useRef} from 'react';
import {Grid, makeStyles, Typography, Button} from '@material-ui/core';
import Sticky from 'react-sticky-el';
import {Markup} from 'interweave';

const useStyles = makeStyles(() => ({
      
    linkContent:{
        marginBottom: '20px',
        cursor: 'pointer',
        '&hover':{
            color: '#2196F3'
        }
    },
    activeLink:{
        color: '#2196F3'
    },
    title:{
        paddingTop:'100px',
        paddingBottom:'100px'
    },
    contentCanvas:{
        height:'fit-content'
    },
    leftCanvas: {
        height:'fit-content',
        paddingTop:'40px'
    },
    rightCanvas:{
        borderLeft: '0.5px solid #156EFA',
        padding:'40px', 
        overflow:'auto'
    },
    questionTag:{
        fontWeight:'bold',
        color:'rgba(21, 110, 250, 1)',
        fontSize: '16px',
        lineHeight: '150%',
        display: 'flex',
        textAlign:'center'
    },
    questionTitle: {
        fontSize: '16px',
        lineHeight: '170%',
        display: 'flex',
        color: '#000000',
        padding:'10px',
        textAlign:'left',
        '&:active':{
            color:'#7FD95F'
        },
        '&:hover':{
            color:'#7FD95F'
        }
    },
    questionContent:{
        fontSize: '16px',
        lineHeight: '170%',
        display: 'flex'
    }
}));

const ObjectList =
    [
        {
            id:1,
            key:'A',
            name:'Abatement',
            content:'<p>A reduction in amount or intensity. Usually applies to decreases in taxes or rent.</p>'+
            '<p>Example: Tenants may ask for an abatement in rate if their use of the property has been interrupted or inhibited by actions of the landlord (like renovation work).</p>'+
            '<p>Example: Cities may offer a tax abatement to businesses contemplating moving to the city.</p>'
        },
        {
            name:'Absorption',
            content:'<p>An estimate of the new occupancy, or amount of inventory that is being "absorbed," of a particular type of land use.</p>'+
            '<p>Example: A total of 1,000 new homes are available for sale on the market. During the year, 100 homes have been sold; an equal number may have come on to the market, but this serves only to keep the baseline constant. The annual absorption rate is 10% (100 / 1,000).</p>'
        },
        {
            name:'Acceleration Clause',
            content:'<p>A loan provision giving the lender the right to declare the entire principal amount immediately due and payable, usually upon the violation of a specific loan provision (such as failure to make payments on time). In the absence of such a clause, then a default on one payment would be just that: only one payment in default. Acceleration clauses make the full amount of principal due (immediately, or after a short grace period) upon the default as specified in the loan documents.</p>'+
            '<p>Example: Charles sells his house to Bob, who would like to assume the existing mortgage. Charles fails, however, to notify the lender of the sale -- and the mortgage states that the full principal balance amount accelerates unless the lender approves of the sale. Charles must now pay the full balance of the principal amount of the loan.</p>'
        },
        {
            name:'Accredited Investor',
            content:'<p>An investor with a certain level of income or net worth who is thus able to participate in a private placement of securities (such as membership interests in a limited liability company) without being counted toward the maximum number of investors that are otherwise permitted in an offering exempted under Regulation D of the Securities Act of 1933. Such an investor does not need to meet the "sophistication and experience" requirements that are applicable to other investors, and if the securities in an offering are sold only to accredited investors, then there are no special information requirements. The most common accreditation criteria for an individual includes (roughly):</p>'+
            '<ul><li>an individual with income exceeding $200,000 in each of the two most recent years (or joint income with his/her spouse exceeding $300,000 in each of those years) and a reasonable expectation of reaching the same income level in the current year; OR</li>'+
            `<li>an individual with a net worth (or joint net worth with his/her spouse) exceeding $1 million, excluding the person's primary residence. For additional information on who qualifies as an accredited investor, including how an LLC, Corporation, or Trust can qualify as “accredited investors,” see http://www.sec.gov/answers/rule506.htm.</li></ul>`
        },
        {
            name:'Accrue',
            content:'<p>To accumulate or increase; generally refers to payments owed but which have not yet been paid. For example: XYZ Corporation borrowed $1 million at 6% interest, payable annually at the end of the year (i.e., $60,000 per year). Each month $5,000 of interest on the loan (1/12th of the annual total) accrues.</p>'
        },
        {
            name:'Adjustable-Rate Mortgage (ARM)',
            content:'<p>A mortgage (or deed of trust) loan whose interest rate fluctuates along with another rate. The mortgage rate is usually tied (indexed) to a commonly followed rate such as the prime rate or LIBOR, plus a certain spread, or margin, such as 1 or 2%.</p>'+
            '<p>Example: A person obtains an adjustable-rate mortgage to finance the purchase of a home. At one-year intervals, the lender may adjust the rate of interest on the loan in accordance with an established index.</p>'
        },
        {
            name:'Adjusted Tax Basis',
            content:'<p>In real estate, this is generally the original cost of property (the original tax basis) less any depreciation deductions plus any capital expenditures. The adjusted tax basis is important when determining final taxes (and tax rates) upon the sale of a property.</p>'+
            '<p>Example: Charles buys a lot for $100,000. He erects a retail facility for $600,000, then depreciates (for tax purposes) the improvements at the rate of $15,000 per year. After 3 years his adjusted tax basis is $655,000 ($100,000 + $600,000 - (3 x $15,000)).</p>'
        },
        {
            name:'Amortization',
            content:'<p>The main tenant, usually in a shopping center.</p>'+
            '<p>Example: Big Buy Foods is the anchor tenant in a retail center. The anchor tenant, because it has drawing power to bring customers to the center, normally pays less rent per square foot than an ancillary tenant.</p>'
        },
        {
            name:'Ancillary Tenant',
            content:'<p>A shopping center tenant that occupies less space and is of lesser importance in generating shopping center traffic than an anchor tenant. Ancillary tenants typically pay higher rents relative to anchor tenants.</p>'+
            '<p>Example: The tailor shop, hairstylist, and pet store are often ancillary tenants in a neighborhood shopping center; the supermarket, on the other hand, would often be the anchor tenant.</p>'
        },
        {
            name:'Appraisal',
            content:`<p>An estimate of value, generally made by a professional appraiser (certified to meet certain education, experience, and knowledge requirements) who uses a systematic approach or process (including the analysis of market data) in order to reach a conclusion. An appraisal of a property might be made not only to determine a reasonable offering price in a sale, but also to determine an appropriate loan size of a loan, to allocate a purchase price between land and building (improvements), to determine an appropriate amount of hazard insurance, or for estate tax purposes at the owner's death.</p>`
        },
        {
            name:'As Is',
            content:`<p>Without Guarantees as to condition, as in a sale. May signal a problem in condition, or may merely indicate that the seller is not in a position to attest as to the property's condition (s in a sheriff's sale following a foreclosure). Premises must be accepted by a buyer or tenant as they are, including physical defects (other than hidden -- or latent -- defects).</p>`+
            `<p>Example: Henry purchases a building from Michael with the understanding that the building is to be conveyed as is. When Henry discovers that the roof leaks, Michael is not legally responsible for repairs.</p>`
        },
        {
            name:'Assumable Loan',
            content:`<p>A mortgage loan that allows a new purchaser to undertake the obligation of the loan with no change in loan terms. This is generally true of loans without due-on-sale clauses. Most FHA and VA mortgages are assumable.</p>`+
            `<p>Example: Dan sells a home with an assumable loan to Walter. Walter takes over the payments of the loan and accepts liability under the mortgage promissory note.</p>`
        },
        {
            id:2,
            key:'B',
            name:'Balance',
            content:`<p>The amount left over after subtracting the amount owed (on a loan) or the amount remaining already paid (in an account).</p>`+
            `<p>Example: A current loan balance of $95,000 means that loan payments have reduced the outstanding debt to that amount.</p>` +
            `<p>Example: A balance of $25,000 in a depositor savings account represents the amount deposited, plus interest earned, less any amount withdrawn.</p>`
        },
        {
            name:'Balloon Payment',
            content:`<p>The final payment on a loan, when that payment is greater than the preceding installment payments and repays the loan in full.</p>`+
            `<p>Example: A debt requires interest-only payments annually for five (5) years, at the end of which time the principal balance (a balloon payment) becomes due.</p>`
        },
        {
            name:'Basis (Tax)',
            content:`<p>The point from which gains, losses, and depreciation deductions are computed. Generally the cost, or purchase price, of an asset.</p>`+
            `<p>Example: Claire purchases land for $100,000 and erects a store for $800,000. Her tax basis is $900,000. If she then sells the property for $950,000, she has a $50,000 gain. If she had earlier claimed depreciation for a total of $50,000, however, then her tax basis would have been adjusted -- reduced -- by that $50,000, so that now she would have a total gain of $100,000. Claire thus would have gained tax benefits in early years, but will be subject to some degree of depreciation recapture at the time of sale, depending on how the depreciation was calculated.</p>`
        },
        {
            name:'Basis Point',
            content:`<p>An investment program in which funds are invested into an entity without investors knowing which properties will be purchased.</p>`+
            `<p>Example: Each of 100 investors contributes $5,000 into a project. The sponsor has not yet located the properties to be purchased, so the investment money is said to be placed in a blind pool.</p>`
        },
        {
            name:'Bridge Loan',
            content:`<p>Financing between the termination of one loan and the beginning of another loan, also sometimes referred to as a "gap" or "swing" loan.</p>`+
            `<p>Example: A developer with an outstanding construction loan is in the process of negotiating better terms for permanent financing. She has arranged for a bridge loan to pay off the construction loan when it is due, and to tide her over until the permanent financing is arranged, at which time the bridge loan will be repaid.</p>`
        },
        {
            name:'Broker',
            content:`<p>A state-licensed agent who, for a fee, acts for property owners in real estate transactions, within the scope of that state's law.</p>`+
            `<p>Example: A person wanting to sell or lease property often engages a broker to arrange the sale or to locate tenants. A broker may also be engaged by a prospective buyer or tenant to locate acceptable property.</p>`
        },
        {
            name:'Broker Price Opinion',
            content:`<p>A BPO, sometimes referred to as a broker's opinion of value, is an analysis provided by a real estate broker to assist a buyer or seller in making decisions about the listing price of real estate or a suitable bid for purchase; it's similar, though less comprehensive, to a comparative market analysis. A fee may be charged for this service, but it may not be represented as an appraisal. While some lenders require an appraisal for mortgage lending purposes, others (particularly in the asset-based lending sector) may be content with a broker's price opinion.</p>`+
            `<p>Example: Because the Waltons had recently had their house appraised to secure a home equity loan, they were content with a broker's price opinion when they decided to list it for sale.</p>`
        },
        {
            name:'Buy and Hold',
            content:`<p>Refers to longer-term equity investing, meaning that investors will take an ownership stake in a property (as opposed to being a lender or other lienholder) and hold that position for some period of years while the property is managed toward improved performance and returns. "Buy and hold" investments can be contrasted to "fix and flip" purchases, where investors seek only to make some basic repairs or improvements and then to sell the property as quickly as possible.</p>`
        },
        {
            name:'Buy-Sell Clause',
            content:`<p>An agreement among partners, LLC members, or stockholders pursuant to which some partners / members / stockholders agree to buy the interests of others, upon some event.</p>`+
            `Example: Jones & Smith are partners. In the event that Jones dies, Smith has agreed to buy Jones' interest for $100,000. If Smith dies first, Jones will buy his interest for $25,000.`
        },
        {
            id:3,
            key:'C',
            name:'Cap Rate',
            content:`<p>The capitalization rate, or “cap rate,” refers to a ratio used to convert an income stream into an estimate of value. The income stream utilized is the property's net operating income, which takes into account expenses such as utilities, insurance, management, and repairs, but which does not include financing expenses (like debt service). At the time of acquisition, the cap rate can be figured by dividing a property's net operating income by the property's purchase price (its then current value).</p>`+
            `<p>Example: A property that has a gross income of $300,000 and operating expenses of $100,000 (for a net operating income of $200,000), and a purchase price of $2,000,000 would be calculated as:</p>` +
            `<p>Net Operating Income ÷​ Purchase Price = $200,000 ÷​ $2,000,000 = 10.0% cap rate.</p>` + 
            `<p>Since cap rates convert an income stream to value, the above calculation can be re-figured so that a given income stream and an assumed cap rate can be used to estimate the value of a comparable property, or even to estimate the future value of a property. Investors often use cap rates to convert future projected income streams into that property's future value (and thus its anticipated sales price at that time).</p>`
        },
        {
            name:'Capital Call',
            content:`<p>A request made to existing equity owners for additional money in order to fund deficits due to construction or operating costs.</p>`+
            `<p>Example: Investors in Money Pit, LLC were asked, in a capital call, for an additional $1 million to cover company deficits brought about by poor budgeting, lack of cost controls, and project "bleeding."</p>`
        },
        {
            name:'Capital Gain',
            content:`<p>Gain on the sale of a capital asset like real property. Capital gains enjoyed on assets held for a long term (generally at least one year) often enjoy lower tax rates than ordinary income.</p>`+
            `<p>Example: Karen buys an investment property for $100,000 from which she earns ordinary income of $8,000 annually. After three years, she sells the property for $140,000. The $40,000 gain on sale is reported as a long-term capital gain on her tax return and is taxed at a rate that is less than the tax rate on the rental income she had earned earlier.</p>`
        },
        {
            name:'Cash Flow',
            content:`<p>Periodic payments available to an equity investor, after deducting all other expenses applicable to rental income, including operating and financing expenses. Can be contrasted with net operating income, which deducts from gross rental income the various operating expenses, but which does not also factor in the effect of financing expenses.</p>`
        },
        {
            name:'Cash on Cash Return',
            content:`<p>The "cash on cash return," also sometimes called the "equity dividend rate", is a simple ratio measurement of an investor's return in relation to the cash actually invested. The cash on cash ratio is determined by dividing the before-tax cash flow (net operating income less debt payments) and dividing it by the initial equity investment. For example if the net operating income is $150,000, the debt service is $50,000, and the amount initially invested is $1 million, then:</p>`+
            `<p>(Net operating income less debt service) / initial equity investment = ($150,000 - 50,000) / $1,000,000 = 10% cash on cash return</p>`
        },
        {
            name:'Commercial Property',
            content:`<p>Property designed for uses other than personal residential purposes, often times related to business activity. Commercial property includes (among other things) retail shopping centers, multi-family apartment buildings, office buildings, hotels and motels, and self-storage facilities.</p>`
        },
        {
            name:'Comparative Market Analysis',
            content:`<p>Sometimes called a competitive market analysis, this is an estimate of the value of a property using some indicators taken from sales of comparable properties (such as price per square foot). These value estimates, similar to a broker's price opinion, are not appraisals and do not meet the stndards of appraisal as defined by regulatory bodies.</p>`+
            `<p>Example: Although real estate brokers and agents may not perform appraisals in most states because they are not appropriately certified or licensed), often estimate the value of a subject property using a comparative (or competitive) market analysis in order to help their clients set listing prices and agree on selling prices.</p>`
        },
        {
            name:'Compound Interest',
            content:`<p>Interest paid on the original principal and also on any accumulated (accrued) and unpaid interest.</p>`+
            `<p>Example: $100 deposited in a 5% savings account earns $5 interest the first year. Its second-year earnings are 5% of $105,or 5.25%. Each year, interest is received on previously earned but undistributed interest, so interest compounds.</p>`
        },
        {
            name:'Core',
            content:`<p>In real estate, this refers to a property categorization and investment "style," more specifically to stable income-producing properties with already high occupancy rates, market rate rents, high quality, credit tenants, and very limited deferred maintenance. Investing in "core" properties is considered a conservative investment strategy, the returns for which will generally consist of current income .</p>`
        },

        {
            name:'Core Plus',
            content:`<p>A property categorization and investment style in real estate referring to relatively stable income-producing properties that could also use some moderate improvements, such as some limited deferred maintenance, in order to improve leasing rates or increase below-market rents. Investing in "core plus" properties is considered a moderately conservative investment strategy, more risky than "core" but less so than "value-add." The returns on these properties are still driven primarily by current income but also include some expected capital appreciation relating to the moderate improvements to be made.</p>`
        },
        {
            name:'Credit Report',
            content:`<p>An evaluation of a person's capacity (or history) of debt repayment. Generally available for individuals from credit repayment histories and similar institutionally reported data. Some people argue that conventional credit reports are too limited in their focus because they do not include payment histories with respect to rents, utilities, and other basic household services.</p>`+
            `<p>Example: A credit report showing no late mortgage payments within the last 12 months may well mean that a person will be assigned a good credit score (perhaps a FICO score of 660 or above). This would be a good credit rating to have when applying for a new loan.</p>`
        },
        {
            name:'Credit Score',
            content:`<p>A number that purports to predict the probability that a person will repay a loan. Generally, the higher the number, the better risk the individual is considered to be/ The score may determine whether the person gets the loan and how favorable the terms will be. The score is estimated from information contained in the individual's credit report. See also FICO.</p>`+
            `<p>Example: With a credit score above 720, Ms. Phillips was able to arrange a loan at a prime (favorable) mortgage rate.</p>`
        },
        {
            id:4,
            key:'D',
            name:'Debt Service',
            content:`<p>The periodic payments required to cover the interest payments -- and usually also including a portion of the principal amount -- of a loan.</p>`+
            `<p>Example: A loan of $100,000 calls for 300 equal monthly payments to fully amortize the principal. Interest is 8% annually. The monthly payments are $771.82. The annual debt service is the sum of the 12 monthly payments, or $9,261.84.</p>`
        },
        {
            name:'Deed',
            content:`<p>A written document that, when properly signed and delivered, convey title to real property. There are different types of deeds that provide different levels of assurance about the extent of the title being conveyed; some forms of deed guarantee that all aspects of ownership are being conveyed, while others make only limited promises about the ownership rights.</p>`+
            `<p>Example: In exchange for the agreed-upon terms of a purchase contract (which might include the payoff of an older loan on the property), at the closing of escrow the seller delivers a deed to the buyer.</p>`
        },
        {
            name:'Deed of Trust',
            content:`<p>A legal instrument used in many states in lieu of a mortgage, where legal title to a property is vested in one or more trustees to secure the repayment of a loan.</p>`+
            `<p>Example: Bob borrows $50,000 on his property from lender Larry. Bob provides a deed of trust that is held in the name of Honest Abe, a trustee. If Bob defaults, lender Larry will foreclose on borrower Bob to gain possession of the property.</p>`
        },
        {
            name:'Default',
            content:`<p>Failure to fulfill an obligation or promise, or to perform specific acts.</p>`+
            `<p>Example: After the borrower defaulted on payments for three months, the lender posted the property for foreclosure.</p>`
        },
        {
            name:'Deficiency',
            content:`<p>In mortgage finance, a shortfall of funds recovered through the sale of property securing a foreclosed loan compared to the amount of debt, accrued interest, foreclosure expenses, and damages incurred by the lender.</p>`+
            `<p>Example: A lender foreclosed on a mortgage loan with an outstanding principal balance of $100,000 and accrued but unpaid interest of $2,000. At the foreclosure sale, the property brought $80,000. The lender claims a deficiency of $22,000 plus expenses in filing for a judgment for this remaining amount in the courts.</p>`
        },
        {
            name:'Delinquent',
            content:`<p>Past due; having an unpaid amount after the due date and any grace period has passed. Normally delinquency occurs before a default is declared.</p>`+
            `<p>Example: A mortgage with payments past due for more than 10 days is considered delinquent.</p>`
        },
        {
            name:'Demographic',
            content:`<p>Pertaining to the characteristics of the population, such as race, sex, age, household size, population growth, and density.</p>`+
            `<p>Example: As a first step in estimating the demand for new or existing housing units, a real estate company may would likely undertake a demographic study, which would review the current population density and rate of growth, the age distribution of the population, and average household size in that local market area.</p>`
        },
        {
            name:'Depreciation',
            content:`<p>A charge against the value of an asset relating to its estimated wear and obsolescence. The term is most often used to refer to tax code provisions that exclude from taxable income a portion (the depreciable amount) that can be attributed to “wasting assets.” In real estate, buildings and improvements constitute such assets; these things have a finite life, and thus can take a depreciation "deduction" not always available in other investment classes. The value of a property must therefore be allocated between the amount attributable to the building or other "improvements," and that of the land. Land is deemed to have an infinite life (because it never goes away) and so is not depreciable. A tax depreciation deduction may even be claimed when the property's value has increased.</p>`+
            `<p>Depreciation allows an investor to gain a tax deduction without having to make any cash payment. It thus provides an important benefit to real estate investors. It results in an adjusted tax basis for the property; this adjusted basis will result in some additional tax at the time of sale, but the tax will have been deferred and may well be at a lesser rate than would have earlier applied.</p>`
        },
        {
            name:'Depreciation Recapture',
            content:`<p>To the extent that an investor's tax basis in an asset has been adjusted (often because of depreciation), the investor may be required to pay additional tax – depreciation recapture – on the amount of the adjustment. For real estate assets, the rate of tax will depend on whether or not an accelerated depreciation method had been used or whether offsetting capital expenditures have been made.</p>`
        },
        {
            name:'Discounted Cash Flow',
            content:`<p>A method of investment analysis in which anticipated future cash income from an investment is estimated and converted into a rate of return (generally the internal rate of return, or IRR) based on the time value of money. Alternatively, when a rate of return is specified, a net present value of an investment can be estimated.</p>`+
            `<p>Example: An asset purchased for $1,0000 is expected to generate annual income of $100 for the next 10 years, after which time it is expected to sell for $1,200. Discounted cash flow analysis indicates that the internal rate of return on the investment would be 11.2% annually.</p>`
        },
        {
            name:'Due Diligence',
            content:`<p>A reasonable effort to obtain accurate and complete information in advance of a major decision; in real estate, this usually refers to the inquiries made in advance of a purchase or investment in a property. Due diligence considers the physical, financial, legal, and social characteristics of a property and its expected investment performance. The underwriting of a loan or investment is a form of due diligence, in the sense that it constitutes a relatively detailed risk assessment of that loan or investment.</p>`+
            `<p>Example: A potential purchaser of a property sent some experts to perform a due diligence review of the property, including a review of the mechanical and electrical systems of a building, local market conditions and competition, and environmental hazards.</p>`+
            `<p>Example: An investor is considering making an investment through a real estate crowdfunding company. As part of his due diligence, he carefully reads the offering materials, listens to a pre-recorded webinar in which the sponsoring company presents the opportunity, and contacts the crowdfunding company with any additional questions he may have.</p>`
        },
        {
            id:5,
            key:'E',
            name:'Encumbrance',
            content:`<p>Any right to, or interest in, land that affects its value. Includes outstanding mortgage loans, unpaid taxes, easements, and deed restrictions.            </p>`+
            `<p>Example: Encumbrances on Bob's land include 3 mortgages, 4 leases, a mechanic's lien, and a deed restriction preventing the sale of alcoholic beverages on the land.</p>`
        },
        {
            name:'Entity',
            content:`<p>The legal form under which property is owned</p>`+
            `Example: The benefits and risks of owning real property may vary depending on the type of entity that is formed. Among the options are:<br></br>`+
            `coproation<br></br>`+
            `individual ownership (see Tenancy entries)<br></br>`+
            `joint venture<br></br>`+
            `limited liability company (LLC)<br></br>`+
            `limited partnership<br></br>`+
            `partnership<br></br>`+
            `real estate investment trust`
        },
        {
            name:'Equity',
            content:`<p>The interest or value that an owner has in a property that is over and above the mortgage or other liens against it. The equity interest is the true ownership interest in the property; that interest generally holds the right to control the various aspects of property ownership, although the mortgage or other lien interests may place limits on that control. Equity holders have a chance to earn relatively larger returns on investment than do debt holders; while the debt must be repaid first (and thus the equity holders bear more risk), any price appreciation of the property upon sale (after the debt is paid) goes to the equity holder.            </p>`
        },
        {
            name:'Escrow',
            content:`<p>An agreement between two or more parties providing that certain instruments or property be placed with a third party for safekeeping, pending the fulfillment or performance of a specified act or condition.</p>`+
            `<p>Example: The deed to the property and the purchase amount were both placed in escrow pending fulfillment of other conditions to the contract.</p>`
        },
        {
            id:6,
            key:'F',
            name:'Fair Market Value',
            content:`<p>The most probable price that a property should bring in a competitive and open market under all conditions needed for a fair sale, assuming that the price is not affected by undue stimulus and that the buyer and seller are each acting prudently and knowledgeably. The fair market value is the theoretical highest price that a buyer would pay, and the lowest price a seller would accept, assuming that both parties were willing -- but not compelled -- to act.</p>`+
            `<p>Example: An appraisal of a home indicates that its fair market value is $150,000. In a normally active market, the home should sell for this amount if allowed to stay on the market for a reasonable period of time. The owner might, however, give the property to a relative. He might also grow impatient and sell the house for $140,000 -- less than the price he could likely obtain if he kept the house on the market for a longer period. Conversely, an over-eager buyer might be found who would be willing to pay $160,000. If the owner were to provide unusually favorable financing, he might even be able to sell the property for $170,000.</p>`
        },
        {
            name:'FICO Score',
            content:`<p>A measure of borrower credit risk, compiled under a system originated by Fair, Isaac & Co. (i.e. FICO), that is commonly used by mortgage underwriters when originating loans on real estate. The score is based on (among other things) the applicant's credit history and the frequency with which they use credit. Expressed as a number between 300 and 850, the score determines not only whether a loan may be approved but also what type of terms a lender might offer. See credit report.</p>`
        },
        {
            name:'First Lien (Mortgage or Deed of Trust)',
            content:`<p>A lien (often a deed of trust or a mortgage) that has priority over all other liens. In cases of foreclosure, the first mortgage will be satisfied before other mortgages.</p>`+
            `<p>Example: A property costing $100,000 is financed with a first mortgage of $75,000, a second mortgage of $15,000, and $10,000 in cash. If the borrower defaults and the property is sold upon foreclosure for $80,000, the holder of the first mortgage will receive the full amount of the unpaid principal plus legal expenses. The second mortgage will only receive any amounts remaining after the first mortgage has been satisfied, and in this example would not be paid back all of its principal.</p>`
        },
        {
            name:'Fix and Flip',
            content:`<p>A type of business / investment strategy involving the purchase of properties requiring some immediate repairs, which when made will hopefully translate into a more valuable property that can quickly be re-sold at a profit. This strategy can be contrasted to a "buy and hold" approach where the property is held for a longer period.</p>`
        },
        {
            name:'Foreclosure',
            content:`<p>The process by which a lender gains possession of mortgaged land after the borrower has defaulted on a loan. Most states require that some notice be given to a borrower after his missing a required payment before the foreclosure process can begin; during this initial period the owner still has a right to redeem the property, but failing any such redemption, the foreclosure process begins. Statutory foreclosure (such as where deeds of trust are used) can be effected without recourse to courts, although laws still regulate the process. Judicial foreclosure submits the process to court supervision.            </p>`
        },
        {
            id:7,
            key:'G',
            name:'General Partner',
            content:`<p>In a partnership, a partner whose liability is not limited. All partners in an ordinary partnership are general partners, while in a limited partnership most members enjoy limited liability (although one partner must still be a general partner).</p>`
        },
        {
            name:'Green Building',
            content:`<p>A building that is built or developed specifically to minimize utility costs or to maximize positive environmental considerations (i.e. to reduce damage to the environment).</p>`+
            `<p>Example: Many environmentally conscious people seek to buy or rent space in green buildings to feel that they are part of the solution to the world's energy and environmental problems.</p>`
        },
        {
            name:'Gross Amount',
            content:`<p>Total before subtractions. When subtractions are taken, the amount is net.</p>`+
            `<p>Example: Gross sales price (before broker fees); gross income (before vacancy rates are factored in); gross leasable area (before subtracting common areas).</p>`
        },
        {
            name:'Ground Lease',
            content:`<p>A rental of only the land. When the ground lease predates the mortgage, the ground lease generally has priority (unless it is specifically subordinated).</p>`+
            `<p>Example: The landowner, the Shawmoca Indian tribe, gives a 75-year ground lease to Josephine. Josephine pays rent of $5,000 per year and builds a store on the property. At the end of the 50-year period, however, the entire property (including the store that Josephine built) reverts (goes back to) to the Shawmoca Indian tribe.</p>`
        },
        {
            name:'Guaranty',
            content:`<p>An assurance provided by one party that another party will perform under a contract.</p>`+
            `<p>Example: George forms a limited liability company to hold the property he expects to purchase. The lender demands that he also execute a personal guaranty for the loan that he needs to acquire the property.</p>`
        },
        {
            id:8,
            key:'H',
            name:'Hazardous Substance',
            content:`<p>Any of a broad variety of environmental contaminants that are regulated under the Comprehensive Environmental Response Compensation and Liability Act (CERCLA).</p>`+
            `<p>Example: Hazardous substances include solid wastes that can pose a significant threat to human health and chemical contaminants. A petroleum exclusion exempts petroleum products from CERCLA.</p>`
        },
        {
            name:'Hedge (Inflation)',
            content:`<p>An investment that tends to maintain its value over time, even when adjusted for inflation.</p>`+
            `<p>Example: Because real estate tends to increase in value during periods of inflation, it is considered a good inflation hedge. The reason has much to do with replacement costs and the ability to pass along increased expenses in the form of rent increases.</p>`
        },
        {
            name:'Hold Period',
            content:`<p>The time span of ownership, usually for investment real estate.</p>`+
            `<p>Example: Some real estate investors prefer short hold periods (under 5 years) in an attempt to retain a high level of financial flexibility. Others hold property for longer periods, to reduce frequent transactions costs and to forestall depreciation recapture.</p>`
        },
        {
            name:'Holdback (Reserve)',
            content:`<p>Money not paid until certain events have occurred, such as a retained amount on a loan involving construction work.</p>`+
            `<p>Example: The lender retained 20% of the amount of the rehab loan as a holdback, or reserve, until the borrower could show that the agreed renovation work had actually been completed.</p>`
        },
        {
            id:9,
            key:'I',
            name:'Hazardous Substance',
            content:`<p>An asset that is not readily convertible to cash. Real estate is generally considered an illiquid asset because it may take an extended period of time to accomplish a sale, depending on market circumstances.</p>`
        },
        {
            name:'Improvements',
            content:`<p>Additions to raw land that tend to increase the property's value; similar to developments. Improvements include not only buildings but also public enhancements such as streets and sewers.</p>`
        },
        {
            name:'In-Fill Development',
            content:`<p>Improvements on land adjacent to and between existing development. A way to accommodate increased population in an area without spreading the outer boundaries of development.</p>`
        },
        {
            name:'Income Property',
            content:`<p>Real estate that generates rental income. Multi-family apartment buildings, retail shopping centers, office buildings, industrial properties, resort and recreational properties, self-storage facilities, and hotels are all considered income properties. By comparison, personal residences, schools, churches, parks, and undeveloped land not earning significant agricultural sales or extraction royalties are all not considered income properties.</p>`
        },
        {
            name:'Industrial Property',
            content:`<p>Industrial properties include manufacturing facilities, warehouses, distribution centers, and research & development space. Manufacturing and R&D properties tend to be build-to-suit buildings that can be difficult to “re-tenant” without extensive modifications, while warehouses and distribution centers can be more generic buildings. As with office buildings and retail centers, industrial property leases tend to have long terms.</p>`
        },
        {
            name:'Inflation',
            content:`<p>A loss in the purchasing power of money; an increase in the general price level. Generally measured by the Consumer Price Index (CPI), a statistic published by the U.S. Bureau of Labor Statistics.</p>`
        },
        {
            name:'Institutional Lender',
            content:`<p>Financial intermediaries that invest in loans and other securities on behalf of their depositors or customers.</p>`+
            `<p>Example: Institutional lenders are a prime source of real estate loans for owner-occupied properties. Some institutions, such as savings and loan associations and commercial banks, originate loans directly; others, such as insurance companies, lend through mortgage brokers.</p>`
        },
        {
            name:'Interest',
            content:`<p>1. Cost of the use of money.</p>`+
            `<p>Example: Lenders require payment of interest at a specified rate, to compensate them for risk, deferment of benefits, inflation, and administrative burden.</p>` +
            `<p>2. The type and extent of ownership.</p>`+
            `<p>Example: An investor may hold a membership interest in a limited liability company (LLC).</p>`
        },
        {
            name:'Interest-Only Loan',
            content:`<p>A loan in which the interest is payable at regular intervals until the loans maturity, when the full loan balance becomes due. Does not require amortization.</p>`+
            `<p>Example: A property was purchased with a 5-year interest-only loan of $100,000 at an 8% interest rate. The interest of $8,000 must be paid annually for four (4) years. The $100,000 principal amount, together with the last $8,000 interest payment, will be due at the end of the fifth year.</p>`
        },
        {
            name:'Internal Rate of Return (IRR)',
            content:`<p>Abbreviated as "IRR," the internal rate of return is the true annual rate of earnings on an investment, taking into account the time value of money using discounted cash flow analysis (similar to the application of compound interest). The forumla requires a trial-and-error method for solution. In real estate, the IRR figure is used in buy and hold equity investments to include any profit expected to be gained upon the property's sale from the price appreciation of the property (as opposed to "cash-on-cash" returns, which reflect only regular cash distributions).</p>`+
            `<p>Example: John sells for $200,000 land that he bought 4 years earlier for $100,000. The internal rate of return was about 19%; that is the annual rate at which compound interest must be paid for $100,000 to become $200,000 in 4 years.</p>`+
            `<p>Example: Mary received $3,000 per year for 5 years on a $10,000 investment. The internal rate of return was about 15%.</p>`
        },
        {
            id:10,
            key:'J',
            name:'Joint Venture',
            content:`<p>An agreement between 2 or more parties that invest in a single business or property. See also limited liability company or limited partnership.</p>`+
            `<p>Example: Jones Real Estate, Inc. forms a new legal entity that will hold title to property he wants to acquire. Investor Smith is interest in helping to finance that purchase. The new legal entity, into which Smith provides financing and that Jones uses to purchase the property, is sometimes called a joint venture.</p>`
        },
        {
            name:'Judicial Foreclosure',
            content:`<p>A type of foreclosure where the claim is processed by the state court system; the lender sues on the debt, obtains judgment, and executes the judgment against the property of the mortgagor (borrower). This process is to be contrasted with statutory foreclosure, used in states that allow deeds of trust and where the foreclosure process is handled outside of the court system.</p>`
        },
        {
            id:11,
            key:'L',
            name:'Letter of Intent (LOI)',
            content:`<p>The expression of a desire to enter into a contract without actually doing so.</p>`+
            `<p>Example: A lender issues a letter of intent to a potential borrower that states, "We would be interested in extending a mortgage loan to you to you for $100,000 at a 12% interest rate and will pursue this matter with you in the coming days. This letter of intent does not commit either party to borrow or lend."</p>`
        },
        {
            name:'Leverage',
            content:`<p>The use of borrowed money -- debt -- to complete an investment. Leverage can increase the size of the property a purchaser is able to afford, or reduce the investment required for a similar sized property. The lender will, however, typically require a lien on the property to assure that the borrowed funds are repaid, so a purchaser has increased his risk in this respect (the lender must be repaid before the purchaser can fully realize his profits). Moderately leveraged properties (where the debt service is not too high) can provide greater returns to equity investors, thus maximizing investment profits.</p>`+
            `<p>Example: Susan is contemplating buying a rental property for $100,000, which property produces net operating income of $10,000 per year. If she purchase it with all cash, her annual rate of return is 10% ($10,000 / $100,000). If she leverages the investment by investing only $25,000 and borrowing $75,000 at 8% ($6,000 annually), her return on equity will increase to 16% ($10,000 income less $6,000 interest = $4,000; $4,000 / $25,000 = 16%)</p>`
        },
        {
            name:'Lien',
            content:`<p>A charge against property making it security for the payment of a debt, judgment, mortgage or taxes; it is a type of encumbrance.</p>`+
            `<p>Example: David wants to buy a home, but needs a loan to complete the purchase. David offers a lender a mortgage, which would create a lien on the property as security (collateral) for the payment of the debt.</p>`
        },
        {
            name:'Limited Liability',
            content:`<p>The restriction of one's potential losses to the amount invested; the absence of personal liability.</p>`+
            `<p>Example: Steven buys a membership interest in a limited liability company (LLC) for $10,000. If the property owned by the LLC drops in value to less than the mortgaged loan amount, Steven can still not lose more than his initial $10,000 investment amount unless he separately agreed to provide a personal guarantee on the loan.</p>`
        },
        {
            name:'Limited Liability Company (LLC)',
            content:`<p>A legal organizational form offering limited liability protection for the owners and which may be treated as a partnership for federal income tax purposes. An LLC is often used as a way to own real estate because it provides many of the legal advantages of a corporation along with the tax advantages of a partnership.</p>`
        },
        {
            name:'Limited Partnership',
            content:`<p>A partnership structure where some partners are passive investors whose liability is limited to the amounts invested, but where at least one partner is a general partner whose liability is not so limited.</p>`+
            `<p>Example: If a property purchased through a limited partnership drops in value to less than the mortgaged loan amount, limited partners will lose only their initial investment, while a general partner will remain responsible for the balance of the loan and any other additional losses.</p>`
        },
        {
            name:'Liquidity',
            content:`<p>The ease with which assets may be converted into cash.</p>`+
            `<p>Example: Common stocks and U.S. savings bonds generally have good liquidity, since there is a ready public market for those securities and they are easily and quickly traded. Real estate and many types of collectibles, on the other hand, generally have poor liquidity, because the markets for those assets are less streamlined and because the sales process is typically a slower one.</p>`
        },
        {
            name:'Loan-To-Value (LTV) Ratio',
            content:`<p>The amount borrowed compared to the cost or value of the property purchased. Lenders often require that a loan-to-value ratio not exceed a specified amount, unless a borrower also purchases mortage insurance.</p>`+
            `<p>Example: Susan borrows $75,000 of the total $100,000 purchase price of her home. The loan-to-value ratio is 75%.</p>`
        },
        {
            id:12,
            key:'M',
            name:'Market Area',
            content:`<p>A geographic region from which one can expect the primary demand to come for a property (or any product or service provided at a fixed location). Real estate companies often refer to a submarket area, meaning a very focused region, perhaps a specific suburban area, within a larger metropolitan area.</p>`+
            `<p>Example: A multi-family apartment complex can expect to draw its tenants from a certain market area -- perhaps from persons working on that side of town, as opposed to persons working on the other side of town.</p>`+
            `<p>Example: A large super-mall has a larger market area than a smaller neighborhood shopping center. Shoppers can be expected to come from a larger regional area for the super-mall (which may contain a movie theater and large national clothing chains) than they would for a smaller neighborhood shopping center, which likely has restaurants, gyms and smaller service providers but which lacks appeal as a "destination" shopping center.</p>`
        },
        {
            name:'Maturity',
            content:`<p>The due date of a loan.</p>`+
            `<p>Example: A mortgage loan may have a maturity of 30 years. Periodic payments are established so that the loan principal will amortize by the maturity date.</p>`
        },
        {
            name:'Metropolitan Statistical Area (MSA)',
            content:`<p>A geographical region with a relatively high population density at its core and close economic ties throughout the area. MSAs are defined by the Office of Management and Budget (OMB) and used by the Census Bureau and other federal government agencies for statistical purposes.</p>`
        },
        {
            name:'Mezzanine Financing',
            content:`<p>A loan that is of lesser priority than a first mortgage or deed of trust. It may also have loans subordinate to it (hence "mezzanine"). Generally has the same priority as if it were called a second mortgage.</p>`+
            `<p>Example: Williams Real Estate Co. plans to build an office tower for $11 million. It arranged an $8 million first mortgage and $1.5 million in mezzanine financing. A subordinated loan of $0.5 million and the company's equity investment of $1 million completed the capital structure.</p>`
        },
        {
            name:'Mobile Home Park',
            content:`<p>A subdivision of plots designed for the siting of mobile homes (manufactured dwellings designed to be transported to a site and semi-permanently attached). Plots in a mobile home park are generally leased to mobile home owners and include utilities, parking space, and access to utility roads.</p>`
        },
        {
            name:'Mortgage',
            content:`<p>A written legal instrument that creates a lien upon real estate as security for the payment of a specified debt. The mortgage is usually a separate document from the promissory note -- the note evidences the debt obligation, while the mortgage pledges the designated property as security for the debt. Mortgage law in the U.S. has traditionally been within the jurisdiction of of the various states; thus, they are primarily governed by state laws, which can vary.</p>`+
            `<p>Example: Tom wants to buy a home, but needs a loan to complete the purchase. As collateral, Tom offers a mortgage on the property to a lender; if Tom later defaults on the loan, the lender has a lien on the property from the mortgage, and can take possession of the property.</p>`
        },
        {
            name:'Multi-Family Housing',
            content:`<p>Multi-family buildings include any building that includes more than a single family residence, but in common usage the term generally refers to apartment buildings of more than four units. Multi-family residential buildings vary by location (urban or suburban) and size of structure (high-rise or garden apartments). Economic drivers of apartment buildings include demographic trends, home ownership and household formation rates, and local employment growth. Leases are typically short-term (one to two years), and adjust quickly to market conditions. Larger apartment buildings are only minimally affected by any single vacancy. Multi-family properties are generally considered to be one of the more defensive investment types within commercial real estate, though they are still subject to competitive pressures from newer construction.</p>`
        },
        {
            id:13,
            key:'N',
            name:'Net Operating Income',
            content:`<p>The income from a property or business remaining after operating expenses (maintenance, insurance, utilities, etc.) are deducted, but without considering any financing expenses (debt service) or income taxes. Can be compared to gross income, on the one hand, which does not yet deduct for expenses, or net cash flow, on the other hand, which adjusts not only for operating expenses but also for debt service.</p>`+
            `<p>Example: A property produces rental income of $100,000. The various operating expenses for maintenance, insurance, property taxes, management, and utilities come to $60,000. The net operating income is $40,000.</p>`
        },
        {
            name:'Net Worth',
            content:`<p>The sum of an individual's assets less the sum of all obligations; a measure of personal wealth.</p>`+
            `<p>Example: The Securities and Exchange Commission uses an individual's net worth (excluding the value of his primary residence) as one criteria of determining whether that person is an accredited investor.</p>`
        },
        {
            name:'Nonrecourse',
            content:`<p>No personal liability. Lenders may take the property pledged as collateral to satisfy a debt, but have no recourse to other assets of the borrower.</p>`+
            `<p>Example: David purchases a property with a nonrecourse loan. If David defaults, then the lender may foreclose and acquire the property, but will not be able to seek a judgment against any other properties or assets held by David.</p>`
        },
        {
            name:'Note',
            content:`<p>Sometimes referred to as a promissory note​, a note is a written document that evidences a debt and a promise to pay. Unless the note contains a nonrecourse clause, it generally makes the borrower (or "mortgagor") personally liable for the obligation. The note is usually a separate document from the mortgage (or deed of trust), which pledges the designated property as security for the debt.</p>`+
            `<p>Example: Ellen borrows money from James so she can fix and flip a single-family residence. Ellen signs a note in order to acknowledge the debt, to promise to pay under specified terms, and to prescribe a procedure for curing any default. A mortgage will also be signed that pledges the residence to James as security for the note.</p>`
        },
        {
            id:14,
            key:'O',
            name:'Occupancy Rate',
            content:`<p>The percentage of total units that are currently rented. Contrast with vacancy rate.</p>`+
            `<p>Example: Today, the Beach Hotel has 90 of its 100 rooms occupied; its occupancy rate is 90%. Conversely, its vacancy rate is 10%.</p>`
        },
        {
            name:'Office Building',
            content:`<p>Office buildings range from large multi-tenant structures in city business districts to single-tenant buildings (like a hospital’s medical office building). Rents and valuations are influenced by employment growth, a region’s economic focus (finance and high-tech centers need more office space), and productivity rates. Individualized tenant improvements are usually not very involved, but credit quality of tenants is key; re-leases of office space typically require some lead time to consummate. Office properties often have longer-term leases that can lag current market lease rates, so that “step-ups” (or step-downs) of rental rates are not infrequent when leases expire. Because these buildings are often leased to businesses (not just individuals), the tenants often demand special features in the leases, including rights of first refusal to rent contiguous space, signage rights, or even building purchase options.</p>`
        },
        {
            name:'Operating Expenses',
            content:`<p>Amounts paid to maintain a property. Excludes financing expenses, income taxes and depreciation.</p>`+
            `Example: Operating expenses can include:<br></br>`+
            `maintenance costs<br></br>`+
            `management fees<br></br>`+
            `real estate (property) taxes<br></br>`+
            `hazard and liability insurance<br></br>`+
            `utilities<br></br>`+
            `supplies`
        },
        {
            name:'Opportunistic',
            content:`<p>An aggressive (or more risky) investment strategy that in real estate generally signifies investing in properties that require a high degree of rehabilitation in order to eventually earn "market" rental rates. Properties requiring a greater amount of repairs, or rehabilitation, are generally considered "high risk," because the property has not yet proven whether it can indeed earn the rents that are forecast for it when it will be improved to the desired state.</p>`
        },
        {
            name:'Ordinary Income',
            content:`<p>Ordinary income is income that is taxed at ordinary income tax rates and does not qualify for capital gains tax treatment. It's important to understand the difference between ordinary income and capital gain income because, generally, ordinary income tax rates are higher than capital gains tax rates.</p>`+
            `<p>Income such as salaries, interest payments, dividends, and many other items are considered ordinary income.</p>`
        },
        {
            name:'Origination Fees',
            content:`<p>Charges to a borrower to cover the lender's costs of issuing the loan. These costs can typically include the cost of obtaining a credit report, an appraisal or broker price opinion on the property, and expenses associated with obtaining title insurance.</p>`+
            `<p>Example: The lender issued a $50,000 mortgage loan and charged a 3% origination fee ($1,500).</p>`
        },
        {
            id:15,
            key:'P',
            name:'Partition',
            content:`<p>The division of real property between those who earlier owned it together with an undivided interest.</p>`+
            `<p>Example: Ernest and Ivan own land by tenancy in common until they partition the land. Thereafter, each owns a particular tract of land, according to how the original was was divided.</p>`
        },
        {
            name:'Partnership',
            content:`<p>An agreement between persons or entities to invest or do business together. Unless otherwise agreed, either partner may bind the other (within the scope of the partnership), and each partner is liable for all of the partnership's debts. A partnership itself normally pays no taxes, but merely files an information return; the individual partners pay personal income tax on their share of the partnership's income. This is contrasted with a corporation, which must pay taxes on its income, and whose shareholders must also pay taxes on any dividends or other distributions they receive from the corporation.</p>`+
            `<p>Example: Adam and Bill form a partnership to buy land. The partnership owns the property, rather than Adam or Bill, but it files only information returns for tax purposes, while Adam and Bill pay personal income taxes on their share of the partnership's profits.</p>`
        },
        {
            name:'Passive Investor',
            content:`<p>One who invests money but does not actively manage the business or property.</p>`+
            `<p>Example: Jones has neither time nor skills to manage the property that he wants to invest in. He forms a partnership with Smith, who is an experienced real estate syndicator and who will devote time and expertise to manage the property for profit. Jones contributes money, but not effort, so he is a passive investor.</p>`
        },
        {
            name:'Peer-to-Peer Marketplace',
            content:`<p>A form of marketplace utilizing a technological infrastructure that enables distributed access to capital or, conversely, transactions. Peer-to-peer (or "P2P") markets offer are emerging alternative to many types of more established marketplace models. There can be many variations, but a peer-to-peer marketplace typically utilizes the wide-reaching power of the internet to offer access to certain products or services to persons who might normally have had such access. They also offer providers of such products or services with a much broader "reach" to potential users or customers of such products or services.</p>`
        },
        {
            name:'Personal Liability',
            content:`<p>An individual's responsibility for a debt. Most mortgage loans on real estate are recourse, meaning that the lender can look to the property and to the borrower for repayment. This can be contrasted to nonrecourse loans, where a lender can only look to the security (the pledged property) for repayment.</p>`+
            `<p>Example: Paul borrowed $100,000 against land, thereby incurring a personal liability for the debt. Paul fails to make payments, so the lender foreclosed and sold the property for $70,000; Paul still owes 430,000, plus the lender's legal expenses, as a personal liability. The lender can seek a deficiency judgment against Paul for that remaining loan balance.</p>`
        },
        {
            name:'Portfolio',
            content:`<p>A group of investment assets.</p>`+
            `<p>Example: Dan's real estate portfolio consisted of equity shares of three retail shopping centers, two multi-family buildings, and one self-storage facility, and also included shares of loans on a hotel and two single-family residences.</p>`
        },
        {
            name:'Preferred Return',
            content:`<p>A rate of return (often in the 5-10% range) that is paid to investors before the sponsor gets paid any promote share of distributable cash flow. The preferred return is not a guaranteed dividend; sometimes the preferred return is not paid out because the property cash flow doesn’t allow it (for example, where the property is still under development). In such cases, the preferred return typically continues to accrue, and any unpaid amounts are ultimately recouped by the investor when the property is sold. It remains, however, a preferred (higher priority) payout as compared to other potential distributions.</p>`
        },
        {
            name:'Preliminary Title Report',
            content:`<p>A report issued by a title company before a transaction, stating a willingness to insure title upon closing.</p>`+
            `<p>Example: The buyer's attorney arranged for a preliminary title report when the property was put under contract, to discover whether there were any legal or title impediments to be cleared before closing.</p>`
        },
        {
            name:'Prepayment',
            content:`<p>To retire all or a portion of a loan's principal balance before it is due under the note or related mortgage. Some mortgages or notes include a penalty for repayment, since the lender is unable to receive interest on principal that has already been repaid.</p>`+
            `<p>Example: Aaron borrowed $100,000 last year at 6% interest on a 30-yr mortgage. If he pays the remaining principal now, in one lump sum, he will be subject to a pre-agreed 2% prepayment penalty that amounts to $2,000.</p>`
        },
        {
            name:'Prepayment Penalty',
            content:`<p>Fees paid by borrowers for the privilege of paying off the loan in advance of its maturity date, i.e. before it becomes due. Lenders plan on loans earning interest for a set period of time; if a borrower repays a loan early, the lender must scramble to find another use for the funds.</p>`+
            `<p>Example: Tom borrowed $200,000 under a 5-year loan agreement. The loan agreement had a prepayment penalty clause stating that Tom would have to pay 1% of the loan's principal balance if he paid it off before the end of the 5-year term. If he prepays early, he will have to pay a $2,000 prepayment penalty.<p>`
        },
        {
            name:'Principal',
            content:`<p>The amount of money raised by a mortgage or other loan that still remains after some of that amount may have been amortized by earlier payments. Principal can be contrasted to the interest paid on the loan.</p>`+
            `<p>Example: Harry arranged a amortizing loan of $100,000 principal amount at a 6% interest rate. The first monthly payment is $1,200 and includes $500 interest and $700 of principal amortization; following the payment, the principal balance be $99,300.<p>`
        },
        {
            name:'Priority',
            content:`<p>Legal precedence; having preferred status. Generally, upon foreclosure, lenders are repaid according to priority.</p>`+
            `<p>Example: George's home was foreclosed and sold for $25,000. Unpaid taxes and attorney's fees of $5,000 were accorded priority, and were paid in full. The rest of the sales proceeds were applied against the $20,000 first mortgage on the property. There was nothing left for the second mortgage, because it was lower in priority.<p>`
        },
        {
            name:'Private Placement',
            content:`<p>Also referred to as a private offering, a private placement is an investment offered for sale to a group of investors, generally under exemptions to the registration requirements by the U.S. Securities and Exchange Commission and state securities registration laws.</p>`+
            `<p>Example: The sponsor of a real estate syndication prepared a private placement to raise equity for the commercial real property being acquired. Only persons who are accredited investors are allowed into the offering, otherwise the sponsor may be required to register a public offering of the securities with the SEC.<p>`
        },
        {
            name:'Pro Forma Statement',
            content:`<p>Financial statements showing what is expected to occur (as opposed to actual results). From the Latin pro forma ("according to form").</p>`+
            `<p>Example: The broker prepared a pro forma statement for the prospective purchaser that showed all the expected cash flows for the property.<p>`
        },
        {
            name:'Promissory Note',
            content:`<p>Another term for note. A legal document that evidences a debt, specifying how much money is being borrowed and the terms and conditions under which it is to be repaid.<p>`
        },
        {
            name:'Promote',
            content:`<p>Under an investment structure commonly used in private real estate investments, the "promote" is the share of a property's excess distributable cash flow (the amount of income that exceeds any "preferred" payments required to be made to outside investors) to which the sponsor is entitled. The apportionment of this remaining distributable cash varies among deals, although the investors will nearly always be entitled to the lion’s share of the deal profits. The sponsor’s promote, or share of such profits, will depend on a number of factors, including the degree of difficulty of arranging the opportunity, how intensive the management of the property is expected to be, and whether the sponsor already brings a successful track record to investors. The promote can be analogized to the "carry" structure used in venture capital and hedge fund profit-sharing arrangements.<p>`
        },
        {
            name:'Public Offering',
            content:`<p>A solicitation of the general public for the sale of investment units, or securities. Generally requires approval by the U.S. Securities and Exchange Commission and/or state securities agencies. A public offering is to be contrasted to a private placement.</p>`+
            `<p>Example: A sponsor of a real estate syndication who wants to sell investment securities to persons who are not accredited investors or who are otherwise not sophisticated investors will likely be deemed to be making a public offering, which will be required to be registered with the Securities and Exchange Commission and state securities agencies.<p>`
        },
        {
            id:16,
            key:'R',
            name:'Recorder',
            content:`<p>The public official (usually of the local county) who keeps records of documents concerning real property that are used to show evidence of title. Sometimes known as the registrar or county clerk.</p>`+
            `<p>Example: After closing, the title company sent the deed to the recorder to provide public record of ownership.</p>`
        },
        {
            name:'Recording',
            content:`<p>The act of entering in a book of public records the legal documents that affect the title to a piece of real property. Recording in this manner gives notice to the world of the facts recorded.</p>`+
            `<p>Example: By recording the deed from a sale of real property, the buyer is assured that all subsequent interested parties are given notice of the buyer's ownership interest in the property. Liens (such as deeds of trust or mortgages) may also be recorded.<p>`
        },
        {
            name:'Recourse',
            content:`<p>The ability of a lender to claim money from a borrower in default in addition to the property pledged as collateral. Contrast nonrecourse.</p>`+
            `<p>Example: Roger obtains a mortgage loan from Hometown Savings. If Roger defaults on the loan, Hometown Savings may not only foreclose and force a sale of the mortgaged property, it may also have recourse to Roger's other assets if the sale fails to fully satisfy the amount due under the loan.<p>`
        },
        {
            name:'Refinance',
            content:`<p>To replace an existing loan(s) with a new loan(s).</p>`+
            `<p>Example: Michelle has a $50,000 loan against her house, which is worth $200,000. She wants to get some cash to pay for her daughter's college education. She refinances the house with a new $150,000 loan, so that after paying $5,000 in transaction costs she will realize $95,000.<p>`
        },
        {
            name:'Regulation D',
            content:`<p>A regulation made by the Securities and Exchange Commission, under the Securities Act of 1933, that sets forth conditions to be satisfied in order to qualify for a private offering exemption from registration.</p>`+
            `<p>Example: Syndicator Nancy wants to sell membership interests in a limited liability company (LLC) that will own a portion of an office building. She uses Rule 506 of Regulation D to sell such interests only to accredited investors, to avoid the need of registering a public offering, thereby saving money and several months of delay.<p>`
        },
        {
            name:'REIT',
            content:`<p>A Real Estate Investment Trust, or REIT, is a real estate mutual fund, allowed by income tax laws to avoid the corporate income tax if it limits its investments to real estate or mortgages and meets certain other requirements such as annually distributing 90% or more of its income to shareholders. Some of these restrictions can limit the maneuverability of REITs, which also tend to focus only on "core" properties with limited capital appreciation potential.<p>`
        },
        {
            name:'Retail Property',
            content:`<p>The retail sector includes everything from smaller neighborhood shopping centers (encompassing, for example, a small grocery, pharmacy and a few restaurants or clothing stores) to large “super-regional” malls that have entertainment activities and can draw shoppers from a great distance. Retail properties are most broadly influenced by the state of the national economy generally, especially such indicators as employment growth and consumer confidence levels. More local factors include the property location and its traffic flow; population demographics; and local household incomes and buying patterns. Retail store leases frequently contain a base rent plus a “percentage rent” based on the tenant’s gross sales figures. Leases also often have long terms; as with office buildings, this means that after a while lease rates may lag current market rates, and step-ups may need to wait until lease expirations.<p>`
        },
        {
            name:'Risk',
            content:`<p>Uncertainty or variability; the possibility that returns from an investment will be less than forecast, or that invested principal might be lost. Diversification of investments provides some protection against risk.</p>`+
            `<p>Example: Types of risk in real estate include (1) business risk, involving the project type, its management, and its market area, and how each of these factors might affect rents, vacancies and operating expenses; (2) financial risk, meaning both the uncertainty of the equity return when debt financing is used and the variability of interest rates that might affect a property's debt service or its ultimate sale price; (3) inflation and other universal "systemic" risks like war or significant political changes, (4) liquidity risk, meaning whether (and when) the investment can be "cashed out," and (5) variance or sensitivity risk, referring to the degree of variability of any of the foregoing risks.<p>`
        },
        {
            name:'Risk vs. Return',
            content:`<p>A financial concept that attempts to compare the potential fluctuations of an investment with the projected return associated with it. Increased risks require that an investor demand increased returns in compensation; people don’t normally accept the same rate of return on a very risky investment that they can already get on a low-risk investment.</p>`+
            `<p>Example: An expected return of two (2) percentage points above the rates paid by U.S. Treasury bonds may be considered sufficient reward for investing in mortgage securities if the historical default rate of such securities has been at 1%.<p>`+
            `<p>Example: An expected return of ten (10) percentage points above the U.S. Treasury rates may be needed to invest in unsecured credit card debt, if the historical default rate on such debt has been at 5%.</p>`
        },
        {
            id:17,
            key:'S',
            name:'Second Mortgage',
            content:`<p>A lien created by a mortgage (or deed of trust) that is subordinate to the amount of the first-lien mortgage (or deed of trust). Second mortgages, which on residences are sometimes referred to as a home equity line of credit (HELOC), can reduce the amount of cash down payment due at the time of purchase, or in a refinancing can raise cash for other purposes. See also subordination.</p>`
        },
        {
            name:'Securities and Exchange Commission (SEC)',
            content:`<p>The federal agency created in the 1930s to carry out the provisions of the Securities Act of 1933, the Securities Exchange act of 1934, the Investment Company act of 1940, and many other laws related to the selling of investment securities. Generally, the agency seeks to protect the investing public by preventing misrepresentation, fraud, market manipulation, and other abuses in the securities markets.</p>`+
            `<p>Example: The Securities and Exchange Commission must review the disclosure materials prepared in conjunction with a public offering of securities, the registration of those securities if they are to be publicly traded, and other matters. The agency does not, however, guarantee an investor against loss.<p>`
        },
        {
            name:'Security',
            content:`<p>1. Property that serves as collateral for a debt.</p>`+
            `<p>Example: Real estate serves as security for a mortgage loan; in the event of a borrower's default on the loan, the lender may sell the property to satisfy the debt.<p>`+
            `<p>2. An investment contract or other legal instrument (such as a stock, bond, option, future, or interest in mineral rights), whereby a person invests money in a common enterprise and is led to expect profits from the efforts of the promoter or some other third party.</p>`+
            `<p>Example: A membership interest in a limited liability company (LLC) is a security.</p>`
        },
        {
            name:'Sensitivity Analysis',
            content:`<p>A technique of investment analysis whereby different values of key variables are tested to see how sensitive the projected investment returns (results) are to changes in assumptions. It is a method of evaluating the riskiness of an investment.</p>`+
            `<p>Example: Sensitivity analysis was applied to a certain income property investment. It was found that forecasting a 15% vacancy rate produced an expected internal rate of return (IRR) of 16%, vs. an 18% IRR for a 5% vacancy factor. On the other hand, varying the property's appreciation rate from 10% per year to 5% reduced the expected IRR from 20% to 4%.<p>`
        },
        {
            name:'Single Family Residence',
            content:`<p>In real estate, generally refers to a stand-alone property intended to house one family. Individual apartment or condominium units are usually thought of as being part of a multi-family building, even though individual units are usually occupied by a single family.<p>`
        },
        {
            name:'Sponsor',
            content:`<p>Also referred to as an "operator" or "syndicator," a sponsor is the managing leader of a real estate project who researches the market, identifies a property to be acquired, organizes the investors and bank financing in order to make the purchase, oversees the subsequent management of the property, and determines when it is to be sold. Sponsors are generally professional real estate companies that are accustomed to these varied tasks. Sponsors will usually themselves make some investment in the property (in addition to the other investors that make up the investing syndicate), but will also make some money from a "promote" interest in a portion of any improved cash flow enjoyed by the property under their oversight.<p>`
        },
        {
            name:'Statutory Foreclosure',
            content:`<p>A foreclosure proceeding not conducted under court supervision; contrast with judicial foreclosure.<p>`+
            `<p>Example: In many states, deeds of trust are used as mortgage-type legal documents. In these cases, foreclosure sales are handled through a trustee acting according to the law and the provisions of the deed of trust. This process is a type of statutory foreclosure.</p>`
        },
        {
            name:'Sub-Market Area',
            content:`<p>Similar to market area, but generally refers to a very focused region -- perhaps a specific suburban area -- within a larger metropolitan area. Like market area, it refers to a geographic region from which one can expect the primary demand to come for a property.</p>`
        },
        {
            name:'Subordination',
            content:`<p>Moving to a lower priority, as a lien would if it changes from a first mortgage to a second mortgage.</p>`+
            `<p>Example: John provided the financing when he sold his land to Kathy, so that John held a first mortgage on the property. Kathy, though needed to obtain a loan to build a structure on the land (a "development loan"), and no lender would provide a development loan unless that loan had the first mortgage. Kathy approached John and offered to repay his loan within two years if, in exchange, he would allow subordination of his loan so that Kathy could obtain a development loan.</p>`
        },
        {
            name:'Syndication',
            content:`<p>The formation of a group of investors, organized by a sponsor, that pools the investors' capital together in order to make an investment. In real estate, such pools (or syndicates) are often formed because even a single property can require substantial capital, usually beyond the means of a single investor. An investor in a syndicate's securities can buy one or more shares (or membership or partnership interests) of a syndication entity (usually a limited liability company (LLC) or a limited partnership), and the entity -- with its aggregate of investments -- can then be in a position to make a meaningful investment in a property.</p>`
        },
        {
            id:18,
            key:'T',
            name:'Tenancy in Common (TIC)',
            content:`<p>An ownership of real estate by 2 or more persons, each of whom has an undivided interest, without the right of survivorship. Upon the death of one of the owners, the ownership share of the decedent is inherited by those designated in the decedent's will, not the other persons who own other shares of the property.</p>`+
            `<p>Example: A syndicate is formed using a tenancy in common. All of the investors have to the deed for the entire property to be conveyed. Each tenant may convey his or her share independently. Their contract states that none of the investors will seek to partition the property.</p>`
        },
        {
            name:'Title',
            content:`<p>Evidence that the owner of real property is in lawful possession thereof; it is evidence of ownership. Usually a property owner transfers his title by means of a legal document called a “deed,” which must be in writing and meet other local requirements. A deed should convey good and marketable title; “good” means that the title is valid, and “marketable” means that it is reasonably free from doubt or litigation, so that it can be readily sold.</p>`+
            `<p>Example: Title to land does not mean merely that a person has the right of possession, because one may have the right of possession but not have title. Title is evidence of true ownership of the land, with all the rights that signifies.</p>`+
            `<p>Example: Karen sold land to Susan. Title to the property was transferred at closing by the deed that Susan received.</p>`
        },
        {
            name:'Title Insurance',
            content:`<p>An insurance policy that assures good title is transferred in the course of a sales or financing transaction. This insurance covers the legal fees and expenses that may be necessary if a claim is made against one's ownership of the property. Different title policies offer different extents of coverage; for example, one can purchase "standard" coverage or "extended" coverage.</p>`+
            `<p>There are two common types of policies: a lender's policy that protects a lender (or the "mortgagee") on the property, and a buyer's policy that protects the buyer (or the "mortgagor").</p>`
        },
        {
            name:'Transaction Costs',
            content:`<p>The costs associated with buying and selling real estate.</p>`+
            `<p>Examples: At the closing of a property's purchase or refinancing, a party (typically the buyer or borrower) must pay for appraisal fees, broker commissions, legal fees, mortgage origination fees, recording fees, and title search fees.</p>`
        },
        {
            name:'Transparency',
            content:`<p>In finance, a manner of doing business such that activities are fully disclosed and reported to investors. Such policies make it possible for potential investors to adequately estimate the risk, and to forecast the income, from investing.</p>`
        },
        {
            name:'Triple Net Lease',
            content:`<p>A lease in which the tenant is to pay all the operating expenses of the property, such as taxes, utilities, insurance, and repairs; the landlord receives a "net" rent. The debt service on the property and the landlord's own income taxes are not considered operating expenses and remain payable by the landlord.            </p>`
        },
        {
            name:'Trust',
            content:`<p>A legal arrangement whereby property is transferred to a trusted third party, or trustee, by a grantor (or "trustor"). The trustee holds the property for the benefit of another (the "beneficiary").</p>`+
            `<p>Example: A living trust was established by a person who wanted to give her warehouse to a trustee for the benefit of her children.</p>`
        },
        {
            name:'Trustee',
            content:`<p>One who holds property in trust for another, to secure the performance of an obligation. In a deed of trust transaction, the trustee is the neutral party.</p>`+
            `<p>Example: Smith purchases property and finances it with a deed of trust from a lender. The title company is the trustee, holding legal title to the property pending Smith's satisfaction of the debt. Should Smith default on the loan, the trustee may sell the property to satisfy the debt.</p>`
        },
        {
            id:19,
            key:'U',
            name:'Underwrite',
            content:`<p>In real estate, generally refers to making an assessment of the risks and potential returns of a potential investment or loan. See also due diligence.</p>`+
            `<p>Example: The lender's loan underwriter analyzed the loan submission package carefully, because she didn't want her firm to take excessive risk.</p>`
        },
        {
            name:'Undivided Interest',
            content:`<p>An ownership right to use and possession of a property that may be shared among co-owners, with no single co-owner having exlcusive rights to any one portion ot the property.</p>`+
            `<p>Example: Ten investors form a tenancy in common and purchase a 100-acre tract of land. Each cotenant obtains an undivided interest in the property. All decisions as to the use and disposition of the land are made collectively by all cotenants. No single cotenant may unilaterally mortgage, develop, or sell a portion of the property.</p>`
        },
        {
            id:20,
            key:'V',
            name:'Vacancy Rate',
            content:`<p>The percentage of all units or space that is unoccupied or not rented. On a pro forma income statement,, a projected vacancy rate is used to estimate the vacancy allowance. This allowance is then deducted from the potential gross income in order to calculate the "effective" gross income.</p>`+
            `<p>Example: In a college town, the apartment vacancy rate varied from 5% during the 9-month college term and 25% during the summer session. Overall, the average vacancy rate was 10%.</p>`
        },
        {
            name:'Value-Add',
            content:`<p>A real estate property categorization, or investment "style," referring to properties requiring some degree of improvements in order to gain increased returns. "Value-add" generally refers to a property that is currently in less than stellar condition and in need of improvements that are of somewhat higher risk, such as performing more-than-usual renovations like upgrading exteriors and interiors and curing deferred maintenance. The "value-add" categorization implies higher risk than the category of "core plus," but less than "opportunistic." Returns on the properties will be driven both by current income and by expected capital appreciation.</p>`
        },
        {
            id:21,
            key:'Y',
            name:'Yield',
            content:`<p>Another term for the internal rate of return (IRR), a measure of an investment's return rate that takes account of the time value of money.</p>`
        },
        {
            id:22,
            key:'Z',
            name:'Zoning',
            content:`<p>A legal mechanism for local governments to regulate the use of privately owned real property by applying their power to prevent conflicting land uses and promote orderly development. Designated zones limit the type and intensity of permitted development.</p>`+
            `<p>Example: Before a tract of land may be developed, the intended use must be permitted under the existing zoning classification. If the proposed use is not permitted, the developer must apply for a variance, or re-zoning, generally following a public hearing and a recommendation from the local planning commission.</p>`
        },

    // {   
    //     id: 4, 
    //     name: 'Are there alternatives to in-person appraisals?',
    //     content:'We are working diligently with federal agencies and partners to roll out alternatives to in-person appraisals where we can. These measures may vary based on the loan, so your Mortgage Expert can help you discuss your options.'
    // },



];


const Glossary = ():JSX.Element => {

    const classes = useStyles();

    let linkIds = [];

    const [scrollRef, setScrollRef] = useState<HTMLDivElement>();

    useEffect(() => {
        
        getBoxIds();
    })

    const getBoxIds = () => {
        const tempLinkIds = [];
        ObjectList.forEach((item, index) => {
            const top = document.getElementById(`${item.id}`);
            if (top) {
                tempLinkIds.push({ key: item.id, offsetTop: top.getBoundingClientRect().top});
            }
        })
        linkIds = tempLinkIds;
    };


    const scrollToAnchor = (anchorName) => {
        if (anchorName || anchorName === 0) {
            const anchorElement = document.getElementById(anchorName);

            if (anchorElement) {
                anchorElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                });
            }
        }
    };

    const onScrollEvent = () => {
        const tempLinkIds = linkIds;
        tempLinkIds.forEach((item, index) => {
            if (scrollRef.scrollTop > item.offsetTop) {
                document.getElementById(`link-${item.key}`).classList.add('activeLink');
                tempLinkIds.forEach((k, v) => {
                    if (item.key !== k.key) {
                        document.getElementById(`link-${k.key}`).classList.remove('activeLink');
                    }
                });
            }
        });
    }

    const contentOptions = [];
    const LinkOptions = [];
    ObjectList.forEach((item) => {
        if (item.id) {
            LinkOptions.push(
            <div style={{width:'100%'}}>
            <Button size='small' id={`link-${item.id}`} style={{textTransform:'none',width:'100%'}} onClick={scrollToAnchor.bind(this, item.id)}>
            <Typography variant='subtitle1' className={classes.questionTag}>{item.key}</Typography></Button>
            </div>);

            contentOptions.push(
            <div id={`${item.id}`} style={{height:'fit-content'}}>
                <Typography variant='subtitle1' 
                style={{
                        fontStyle: 'normal',
                        fontSize: '16px',
                        lineHeight: '170%',
                        color: '#156EFA'}}>
                    {item.name}
                </Typography>
                <Typography className={classes.questionContent} variant='subtitle1'>
                    <Markup content={item.content}/>
                </Typography>
                <br></br>
                    <br></br>
            </div>)
        } else {

            contentOptions.push(
                <div style={{height:'fit-content'}}>
                    <Typography variant='subtitle1' style={{
                        fontStyle: 'normal',
                        fontSize: '16px',
                        lineHeight: '170%',
                        color: '#156EFA'}}>
                        {item.name}
                    </Typography>
                    <Typography className={classes.questionContent} variant='subtitle1'>
                        <Markup content={item.content}/>
                    </Typography>
                    <br></br>
                    <br></br>
                </div>)
        }
        
        
    });

      return (
        <Grid container>
            <Grid container item xs={12} justify='center' className={classes.title}>
                <Typography variant='h2'>Glossary</Typography>
            </Grid>
                <Grid container item xs={12}>
                <Grid className={classes.leftCanvas} item xs={2}>
                        {LinkOptions}
                </Grid>

                <Grid item xs={10} className={classes.rightCanvas}>
                    <div 
                    onScrollCapture={() => onScrollEvent()}
                    style={{ height: 1000, overflowY: 'scroll' ,overflow:'hidden'}}
                    ref={(c:HTMLDivElement) => {
                        setScrollRef(c);
                    }}>
                        {contentOptions}
                    </div>
                          
                </Grid>
                </Grid>
          </Grid>
      );
}

export default Glossary;
