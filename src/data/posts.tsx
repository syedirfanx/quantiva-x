import React from 'react';
import blog2_1 from '../assets/blog/blog-2.1.jpg';
import blog2_2 from '../assets/blog/blog-2.2.jpg';
import blog2_3 from '../assets/blog/blog-2.3.jpg';
import blog2_4 from '../assets/blog/blog-2.4.jpg';

export const posts = [
  { 
    slug: "ai-learning-good-or-bad",
    title: "AI দিয়ে পড়াশোনা করা কি ভালো, নাকি ক্ষতিকর?", 
    date: "August 18, 2026", 
    readTime: "4 min read",
    excerpt: "বাংলাদেশে এখন প্রায় প্রতিটা শিক্ষার্থীর হাতে AI টুল আছে। স্কুল-কলেজ-ইউনিভার্সিটি, সব জায়গায় একটাই প্রশ্ন: AI দিয়ে পড়াশোনা করা কি ভালো, নাকি ক্ষতিকর?",
    content: (
      <>
        <img src={blog2_1} alt="AI Learning Concept" className="w-full rounded-2xl mb-8 object-cover" />
        <p>বাংলাদেশে এখন প্রায় প্রতিটা শিক্ষার্থীর হাতে AI টুল আছে - ChatGPT, Claude, বা অন্য কোনো চ্যাটবট। স্কুল-কলেজ-ইউনিভার্সিটি, সব জায়গায় একটাই প্রশ্ন ঘুরে বেড়াচ্ছে: AI দিয়ে পড়াশোনা করা কি আসলে ভালো, নাকি এটা আমাদের চিন্তাশক্তি নষ্ট করে দিচ্ছে?</p>
        <p>সহজ উত্তর নেই। কারণ প্রশ্নটাই ভুলভাবে করা হচ্ছে।</p>
        
        <h3 className="text-xl text-white font-semibold mt-8 mb-4">"AI ভালো নাকি খারাপ" - এটা ভুল প্রশ্ন</h3>
        <p>AI কোনো ভালো বা খারাপ জিনিস না। এটা একটা টুল। ছুরি দিয়ে যেমন সবজি কাটা যায়, তেমনি কাউকে আঘাতও করা যায়, ছুরিটা দোষী না, ব্যবহারটা দোষী। AI-ও ঠিক তেমন।</p>
        <p>আসল প্রশ্ন হওয়া উচিত: আমি AI-কে কীভাবে ব্যবহার করছি?</p>

        <img src={blog2_2} alt="AI Good Usage" className="w-full rounded-2xl my-8 object-cover" />

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">ভালো ব্যবহার: AI যখন শিক্ষক হয়ে ওঠে</h3>
        <p>ধরা যাক, তুমি Physics-এর একটা টপিক বুঝতে পারছো না, যেমন নিউটনের তৃতীয় সূত্র। তুমি AI-কে লিখলে:</p>
        <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 bg-blue-500/10 rounded-r-lg text-blue-200">
          "এই বিষয়টা বুঝিয়ে দাও।"
        </blockquote>
        <p>এখানে তুমি AI-কে ব্যবহার করছো একজন ব্যক্তিগত টিউটরের মতো। তুমি প্রশ্ন করছো, উদাহরণ চাইছো, নিজের ভাষায় বোঝার চেষ্টা করছো। এই প্রক্রিয়ায় তোমার মস্তিষ্ক সক্রিয় থাকছে, তুমি চিন্তা করছো, প্রশ্ন তুলছো, যাচাই করছো।</p>
        <p>এই ধরনের ব্যবহারে AI আসলে শেখাকে সহজ ও দ্রুত করে দেয়। যে জিনিসটা বই পড়ে বা ক্লাসে না বুঝলে হয়তো দিনের পর দিন আটকে থাকতে হতো, সেটা এখন কয়েক মিনিটেই পরিষ্কার হয়ে যায়।</p>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">খারাপ ব্যবহার: AI যখন তোমার বদলে চিন্তা করে</h3>
        <p>এবার উল্টো দৃশ্য কল্পনা করো। তুমি AI-কে লিখলে:</p>
        <blockquote className="border-l-4 border-red-500 pl-4 py-1 my-4 bg-red-500/10 rounded-r-lg text-red-200">
          "আমার assignment করে দাও।"
        </blockquote>
        <p>এখানে তুমি আর শিখছো না, তুমি শুধু একটা রেজাল্ট নিচ্ছো। AI চিন্তা করছে, তুমি শুধু কপি-পেস্ট করছো। পরীক্ষার খাতায় হয়তো ভালো নম্বর পাবে, কিন্তু বাস্তব জীবনে যখন এই জ্ঞানটা কাজে লাগবে, তখন দেখা যাবে ভিতরে কিছুই নেই।</p>
        <p>এই অভ্যাসটা ধীরে ধীরে বিপজ্জনক একটা জায়গায় নিয়ে যায়- over-dependence, মানে AI-এর ওপর অতিরিক্ত নির্ভরতা। তুমি নিজে থেকে সমস্যার সমাধান খুঁজতে ভুলে যাও। ছোট একটা কাজেও AI-এর কাছে যাওয়া অভ্যাসে পরিণত হয়।</p>

        <img src={blog2_3} alt="AI Comparison" className="w-full rounded-2xl my-8 object-cover" />

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">পার্থক্যটা কোথায়?</h3>
        <p>দুটো ঘটনাতেই AI ব্যবহার হচ্ছে। পার্থক্যটা টুলে না, উদ্দেশ্যে।</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="py-4 px-4 text-white">প্রশ্ন</th>
                <th className="py-4 px-4 text-white">ভালো ব্যবহার</th>
                <th className="py-4 px-4 text-white">খারাপ ব্যবহার</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4">তুমি কী চাইছো</td>
                <td className="py-3 px-4 text-blue-300">বোঝা</td>
                <td className="py-3 px-4 text-red-300">শেষ করা</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4">তুমি কী করছো</td>
                <td className="py-3 px-4 text-blue-300">চিন্তা করছো</td>
                <td className="py-3 px-4 text-red-300">চিন্তা বন্ধ করছো</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4">ফলাফল</td>
                <td className="py-3 px-4 text-blue-300">জ্ঞান বাড়ছে</td>
                <td className="py-3 px-4 text-red-300">জ্ঞান কমছে</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>শিক্ষকরাও এখন এই পার্থক্যটা নিয়ে ভাবছেন। শুধু "AI নিষিদ্ধ করে দাও", এই সমাধান কাজ করছে না, কারণ AI এখন সবার হাতের নাগালে। বরং আলোচনা হচ্ছে কীভাবে পড়ানোর পদ্ধতি বদলানো যায়, যাতে শিক্ষার্থীরা AI ব্যবহার করেও নিজে চিন্তা করতে বাধ্য হয়, যেমন এমন প্রশ্ন করা, যেখানে শুধু উত্তর কপি করলে চলবে না, ব্যাখ্যা করতেও হবে।</p>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">শেষ কথা</h3>
        <p>AI-কে নিজের চিন্তার বিকল্প না বানিয়ে, চিন্তাকে আরও শক্তিশালী করার একটা টুল হিসেবে ব্যবহার করুন।</p>
        <p>AI তোমার হয়ে ভাবার জন্য না, তোমাকে আরও ভালোভাবে ভাবতে সাহায্য করার জন্য। যেদিন তুমি এই লাইনটা বুঝে ফেলবে, সেদিন থেকে AI তোমার শত্রু না, বরং তোমার সবচেয়ে কার্যকর পড়াশোনার সঙ্গী হয়ে উঠবে।</p>

        <img src={blog2_4} alt="AI Learning Conclusion" className="w-full rounded-2xl my-8 object-cover" />

        <p className="text-lg font-medium text-white italic">প্রশ্ন করো, বোঝার চেষ্টা করো, তারপর AI-কে সহকারী বানাও, সমাধানদাতা না।</p>
      </>
    )
  },
  { 
    slug: "your-brain-is-not-against-you",
    title: "আপনার মস্তিষ্ক আপনার বিরুদ্ধে নয়। এটি শুধু দক্ষ হতে চায়।", 
    date: "August 15, 2026", 
    readTime: "3 min read",
    excerpt: "কখনো ভেবেছেন, কোনো অভ্যাস ছাড়তে চান জেনেও কেন বারবার সেটাই করে ফেলেন? এর পেছনে একটি বৈজ্ঞানিক কারণ আছে...",
    content: (
      <>
        <p>কখনো ভেবেছেন, কোনো অভ্যাস ছাড়তে চান জেনেও কেন বারবার সেটাই করে ফেলেন?</p>
        <p>এর পেছনে একটি বৈজ্ঞানিক কারণ আছে।</p>
        <p>আপনার মস্তিষ্ক সবসময় শক্তি ও মানসিক পরিশ্রম বাঁচিয়ে পরিচিত কাজগুলোকে স্বয়ংক্রিয় করার চেষ্টা করে।</p>
        <p>কোনো কাজ বারবার করলে সেই কাজের সঙ্গে যুক্ত neural pathway ধীরে ধীরে আরও শক্তিশালী ও কার্যকর হয়ে ওঠে। একসময় সেটি করতে কম সচেতন প্রচেষ্টাই যথেষ্ট হয়।</p>
        <br />
        <p>তাই আপনি অনায়াসে:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>না ভেবেই ফোন Unlock করেন</li>
          <li>Automatically একই App খুলে ফেলেন</li>
          <li>পরিচিত রাস্তায় প্রায় Autopilot-এ গাড়ি চালান</li>
          <li>Stress-এর সময় পুরোনো অভ্যাসে ফিরে যান</li>
        </ul>
        <br />
        <p>সবচেয়ে interesting বিষয় হলো,</p>
        <p>আপনি অভ্যাস পরিবর্তন করতে গেলে আপনার মস্তিষ্ক সবসময় আপনার বিরুদ্ধে লড়ছে না।</p>
        <p>সে শুধু সেই পথটিই বেছে নিচ্ছে, যেটা সে ইতিমধ্যে ভালোভাবে চেনে।</p>
        <br />
        <p>তাই শুধু প্রশ্ন করবেন না:</p>
        <blockquote className="border-l-4 border-neutral-500 pl-4 py-1 my-4 bg-neutral-800/30 rounded-r-lg italic">
          “এই অভ্যাসটা কীভাবে বন্ধ করব?”
        </blockquote>
        <p>বরং প্রশ্ন করুন:</p>
        <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 bg-blue-500/10 rounded-r-lg italic">
          “এর পরিবর্তে কী করতে পারি?”
        </blockquote>
        <br />
        <p className="font-semibold text-blue-300">Trigger চিহ্নিত করুন → আসল reward বুঝুন → নতুন response তৈরি করুন → বারবার repeat করুন।</p>
        <br />
        <p>পুরোনো pathway একদিনে মুছে ফেলার চেষ্টা নয়।</p>
        <p>একটি নতুন pathway তৈরি করুন।</p>
        <p>কারণ আপনার মস্তিষ্ক আপনার শত্রু নয়।</p>
        <p>এটি একটি efficiency machine।</p>
        <br />
        <p className="text-xl font-medium mt-4">প্রশ্ন হলো, আপনি এটিকে কী automate করতে শেখাচ্ছেন?</p>
      </>
    )
  }
];
