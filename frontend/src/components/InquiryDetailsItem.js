export default function InquiryDetailsItem({inquiry}) {

    return (

        <ul>
            <li>
                {inquiry.uuid}
            </li>
            <li>
                {inquiry.partName}
            </li>
            <li>
                {inquiry.partDescription}
            </li>
            <li>
                {inquiry.length}
            </li>
            <li>
                {inquiry.width}
            </li>
            <li>
                {inquiry.height}
            </li>
            <li>
                {inquiry.material}
            </li>
            <li>
                {inquiry.orderAmount}
            </li>
            <li>
                {inquiry.earliestDate}
            </li>
            <li>
                {inquiry.latestDate}
            </li>


        </ul>

    )
}