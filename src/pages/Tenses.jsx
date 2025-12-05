import React from "react";

export default function Tenses() {
    const tensesData = [
        {
            id: 1,
            name: "Simple Present",
            uzbek: "Oddiy Hozirgi Zamon",
            structure: "Subject + Verb (base form) + Object",
            examples: [
                { en: "I play football every day", uz: "Men har kuni futbol o'ynamан" },
                { en: "She eats breakfast at 7 AM", uz: "U sabah 7 da nonushta qiladi" },
                { en: "They live in Tashkent", uz: "Ular Toshkentda yashaydi" }
            ],
            usage: "Kundalik faoliyatlar, ma'lumot va odatlar uchun"
        },
        {
            id: 2,
            name: "Simple Past",
            uzbek: "Oddiy O'tgan Zamon",
            structure: "Subject + Verb (past form) + Object",
            examples: [
                { en: "I played football yesterday", uz: "Men kecha futbol o'ynamadim" },
                { en: "She ate breakfast this morning", uz: "U bugun ertalab nonushta qildi" },
                { en: "They lived in Samarkand", uz: "Ular Samarqandda yashadilar" }
            ],
            usage: "Tugallangan o'tgan voqealar uchun"
        },
        {
            id: 3,
            name: "Simple Future",
            uzbek: "Oddiy Kelajak Zamon",
            structure: "Subject + will + Verb (base form) + Object",
            examples: [
                { en: "I will play football tomorrow", uz: "Men ertaga futbol o'ynayman" },
                { en: "She will eat breakfast at 7 AM", uz: "U sabah 7 da nonushta qiladi" },
                { en: "They will live in New York", uz: "Ular Nyu-Yorkda yashaydi" }
            ],
            usage: "Kelajakdagi rejalar va bashoratlar uchun"
        },
        {
            id: 4,
            name: "Present Continuous",
            uzbek: "Davom Etayotgan Hozirgi Zamon",
            structure: "Subject + is/are/am + Verb (ing form) + Object",
            examples: [
                { en: "I am playing football now", uz: "Men hozir futbol o'ynayapman" },
                { en: "She is eating breakfast", uz: "U nonushta qilyapdi" },
                { en: "They are living in London", uz: "Ular Londonda yashayapdi" }
            ],
            usage: "Hozir bo'layotgan harakatlar uchun"
        },
        {
            id: 5,
            name: "Present Perfect",
            uzbek: "Tugallangan Hozirgi Zamon",
            structure: "Subject + have/has + Verb (past participle) + Object",
            examples: [
                { en: "I have played football", uz: "Men futbol o'ynamagan bo'laman" },
                { en: "She has eaten breakfast", uz: "U nonushta qilgan" },
                { en: "They have lived here for 5 years", uz: "Ular bu yerda 5 yildan yashaydilar" }
            ],
            usage: "O'tgan bilan hozirning bog'lanishi uchun"
        },
        {
            id: 6,
            name: "Past Continuous",
            uzbek: "Davom Etayotgan O'tgan Zamon",
            structure: "Subject + was/were + Verb (ing form) + Object",
            examples: [
                { en: "I was playing football when he came", uz: "U kelganida men futbol o'nayapman edi" },
                { en: "She was eating breakfast at 7 AM", uz: "U sabah 7 da nonushta qilyapdi" },
                { en: "They were living in Paris", uz: "Ular Parijda yashayapdilar" }
            ],
            usage: "O'tganda davom etayotgan harakatlar uchun"
        }
    ];

    return (
        <div className="tenses">
            <div className="tenses-hero">
                <h1>⏰ Ingliz Tilining Zamonlari</h1>
                <p>Barcha muhim zamonlar, strukturalari va misollar bilan</p>
            </div>

            <div className="tenses-content">
                <section className="tenses-intro">
                    <h2>Zamonlar haqida</h2>
                    <p>
                        Ingliz tilida zamon - bu verbin ko'rinishi bo'lib, u harakatning yoki holatning
                        qachon sodir bo'lganligini yoki bo'lishini ko'rsatadi. Asosan 3 ta asosiy zamon bor:
                        hozirgi, o'tgan va kelajak zamonlari.
                    </p>
                </section>

                <div className="tenses-grid">
                    {tensesData.map((tense) => (
                        <div key={tense.id} className="tense-card">
                            <div className="tense-header">
                                <h3>{tense.name}</h3>
                                <span className="tense-label">{tense.uzbek}</span>
                            </div>

                            <div className="tense-structure">
                                <h4>📐 Struktura:</h4>
                                <code>{tense.structure}</code>
                            </div>

                            <div className="tense-examples">
                                <h4>📝 Misollar:</h4>
                                <div className="examples-list">
                                    {tense.examples.map((example, idx) => (
                                        <div key={idx} className="example">
                                            <p className="example-en">🇬🇧 {example.en}</p>
                                            <p className="example-uz">🇺🇿 {example.uz}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tense-usage">
                                <h4>💡 Qo'llanish:</h4>
                                <p>{tense.usage}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="tenses-table">
                    <h2>Zamonlar Taqqoslash Jadvali</h2>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Zamon</th>
                                    <th>Struktura</th>
                                    <th>Misol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Simple Present</td>
                                    <td>V1</td>
                                    <td>I work</td>
                                </tr>
                                <tr>
                                    <td>Simple Past</td>
                                    <td>V2</td>
                                    <td>I worked</td>
                                </tr>
                                <tr>
                                    <td>Simple Future</td>
                                    <td>will + V1</td>
                                    <td>I will work</td>
                                </tr>
                                <tr>
                                    <td>Present Continuous</td>
                                    <td>am/is/are + Ving</td>
                                    <td>I am working</td>
                                </tr>
                                <tr>
                                    <td>Past Continuous</td>
                                    <td>was/were + Ving</td>
                                    <td>I was working</td>
                                </tr>
                                <tr>
                                    <td>Present Perfect</td>
                                    <td>have/has + V3</td>
                                    <td>I have worked</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="tenses-tips">
                    <h2>💪 Zamonlarni O'rganish Maslahatlar</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <div className="tip-icon">🎯</div>
                            <h3>Kundalik O'qitish</h3>
                            <p>Har kuni 30 minut zamonlar bilan mashq qiling. Takror etish juda muhim!</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">✍️</div>
                            <h3>Yozib O'rganing</h3>
                            <p>Zamonlardan foydalanib jumla yozing va shunga qarab o'rganing.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">🎤</div>
                            <h3>Aytib O'rganing</h3>
                            <p>Misollarni ovozli aytib o'rganing. Bu fikringiz oqlash uchun yordam beradi.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">📚</div>
                            <h3>Matnlarni O'qing</h3>
                            <p>Ingliz tilidagi matnlarni o'qiyotganda zamonlarni diqqat qilib ko'ring.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">🔄</div>
                            <h3>Takrorlang</h3>
                            <p>O'ylab ko'rganlar bilan takrori qiling. Ushbu zamonlarni zotlantirsiz.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">🎓</div>
                            <h3>Testlar Ishlang</h3>
                            <p>Bizning dasturda zamonlar haqida testlarni ishlang va bilimingizni tekshiring.</p>
                        </div>
                    </div>
                </section>

                <section className="common-mistakes">
                    <h2>⚠️ Keng Uchraydigan Xatolar</h2>
                    <div className="mistakes-list">
                        <div className="mistake">
                            <h4>❌ Xato:</h4>
                            <p className="wrong">"I am going to school yesterday"</p>
                            <h4>✅ To'g'ri:</h4>
                            <p className="correct">"I went to school yesterday"</p>
                            <p className="explanation">O'tgan vaqt uchun Past Simple ishlatiladi, Present Continuous emas.</p>
                        </div>

                        <div className="mistake">
                            <h4>❌ Xato:</h4>
                            <p className="wrong">"I work here for 5 years"</p>
                            <h4>✅ To'g'ri:</h4>
                            <p className="correct">"I have worked here for 5 years"</p>
                            <p className="explanation">O'tgan bilan hozirning bog'lanishi uchun Present Perfect ishlatiladi.</p>
                        </div>

                        <div className="mistake">
                            <h4>❌ Xato:</h4>
                            <p className="wrong">"When I arrived, he leaves"</p>
                            <h4>✅ To'g'ri:</h4>
                            <p className="correct">"When I arrived, he left"</p>
                            <p className="explanation">Ikkala harakat ham o'tganda sodir bo'lsa, o'sha zamanidagi zamonlarni ishlatiladi.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
