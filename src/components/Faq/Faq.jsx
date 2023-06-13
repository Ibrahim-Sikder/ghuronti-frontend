import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Others from '../Shared/OtherPage/Others'
import '../Policy/Policy.css'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer';
import './Faq.css'
const Faq = () => {
    return (
        <div>
            <Navbar />
            <Others />
            <div className="termsMain">
                <div className="termContnent">
                    <h1>FAQ</h1>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Flight : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q: I have a debit card. May I use my debit card to book a flight from ShareTrip?</p>
                                    <p>A: Yes, you can easily book a flight with any local or international card, debit or even your credit card.</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: আমার ডেবিট কার্ড আছে। আমি কি ডেবিট কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?</p>
                                    <p>উত্তর: হ্যাঁ, আপনি আপনার লোকাল কিংবা ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q. Can you book a domestic flight on ShareTrip?</p>
                                    <p>A: Yes, we provide both domestic and international flight services. Please let us know your travel plan to assist you in finding the preferred flight.</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক ফ্লাইট বুক করতে পারবো?</p>
                                    <p>উত্তর: হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে সাহায্য করতে পারি।</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q: Can I make the payment later for an online booking on ShareTrip?</p>
                                    <p>A: Unfortunately, you cannot hold the booking unless you pay. You instantly need to pay the amount to confirm your purchase made online.</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: অনলাইন বুকিং-এর ক্ষেত্রে আমি কি পেমেন্ট পরে করতে পারি?</p>
                                    <p>উত্তর: আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q. May I have a hard-copy receipt sent by post?</p>
                                    <p>A: We don't send hard copy receipts by post. We will email your booking details and confirmation to you. Alternatively, you can come to our office for a hard copy of your purchase, and we will provide the hard copy to you.</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি pathano হবে?</p>
                                    <p>উত্তর: দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q: Will it cost any extra charge if I purchase through a card from ShareTrip?</p>
                                    <p>A: During an online or an offline transaction there is a convenience fee that customers have to pay. However, there is no extra charge on anything you purchase from ShareTrip be it online or offline. </p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?</p>
                                    <p>উত্তর: অনলাইন বা অফলাইন বুকিংয়ের সময় একটি কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ নেই।</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>Q: What is ST Convenience Fee?</p>
                                    <p>A: ST Convenience fee is the charge that the customer needs to pay for the support, convenience and service that he/she is availing from the online platforms.</p>
                               </div>
                               <div className="AccordionQUestionAnswer">
                                    <p>প্রশ্ন: শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?</p>
                                    <p>উত্তর: কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয় চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।</p>
                               </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hotel : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Visa : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Tours : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Buses : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Trains : FAQ Question & Answer</Accordion.Header>
                            <Accordion.Body className='accorBOdy'>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Faq
