export default function OfferCard({offer, index}) {

    return (
        <>
            <p>Offer No.:{index}</p>
            <p>{offer.expectedDeliveryDate}</p>
            <p>{offer.inquiryPartId}</p>
            <p>{offer.offerDescription}</p>
            <p>{offer.offerFIATamount}</p>
            <p>{offer.offeringUserId}</p>
            <p>{offer.ownerIdOfInquiry}</p>
        </>
    )
}