const knockknockInquiryComponent = new KnockKnock({
    knockknockAPITicket: 'KnockKnock API Ticket',
    serviceLanguage: 'KR', // KR or ENG [pick 1]
    serviceTitle: 'Service Name',
    serviceSubTitle: 'Service Explanation OR Contact Explanation',
    useBoxShadow: true, // If the value is true, the component would have a boxShadow.
    inquiryCategoryList: [
        {   
            title: "Inquiry Category Title",
            subTitle: "Inquiry Category Explanation",
            textEmoji: "Inquiry Category Text Symbol", // EX) 😁, 📮, 🛠, 📜
            colorName: "blueLight", // blueLight OR orangeLight OR redLight OR greenLight [pick 1]
            inputType: 'short', // short(input) OR long(textarea) [pick 1]
            inputDefaultValue: 'Input Default Value',
            placeHolder: 'Input Placeholder',
            buttonText: 'Text of Input Submit Button',
            needToRespondInquiry: true // If the value is true, the clients should enter their email address.
        }
    ]
});

const trigger = document.querySelector('#knockknock-module-trigger');
trigger.addEventListener('click', () => {
    knockknockInquiryComponent.onOpen();
})