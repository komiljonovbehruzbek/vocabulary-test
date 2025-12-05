import React from "react";

export default function About() {
    return (
        <div className="about">
            <div className="about-hero">
                <h1>📚 Vocabulary Test Haqida</h1>
                <p>Ingliz tilini o'rganishni oson va samara qilamiz</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Dastur haqida</h2>
                    <p>
                        Vocabulary Test - bu Ingliz tilini o'rganuvchilar uchun maxsus tuzilgan
                        interaktiv o'quv platforma. Ushbu dastur orqali siz so'z asosiy leksikani,
                        grammatika qoidalarini va o'qish ko'nikmalarini yaxshilashingiz mumkin.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Nima uchun biz?</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">🎯</div>
                            <h3>Samarali o'qitish</h3>
                            <p>Har bir tushuncha turli usullarda takror etilib, yanada chuqur o'rgangan bo'lasiz.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">📊</div>
                            <h3>Taraqqiyot ko'rish</h3>
                            <p>Har bir testdan so'ng o'z natijangizni ko'rib, taraqqiyotingizni kuzatishingiz mumkin.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">🎓</div>
                            <h3>Turli darajalar</h3>
                            <p>A1 dan B1+ gacha barcha sath uchun tayyorlangan kontent mavjud.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">⏰</div>
                            <h3>O'z vaqtingizda</h3>
                            <p>Har qachon ho'xchaysizda o'z vaqtingizda test ishlashingiz mumkin.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">🌟</div>
                            <h3>Interaktiv</h3>
                            <p>Faqat o'qish emas, balki amaliy ish orqali tilni o'rganib chiqasiz.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">🚀</div>
                            <h3>Oson interfeys</h3>
                            <p>Sodda va tushunarli interfeys bilan ishlash juda oson.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Test turlari</h2>
                    <div className="test-types">
                        <div className="test-type-card">
                            <h3>📖 So'z asosiy leksika</h3>
                            <p>
                                Har bir darajaga mos so'zlarni o'rganish va takrorlash uchun maxsus testlar.
                                Siz har bir so'zning ma'nosi va ishlatilish usulini to'liq o'rganasiz.
                            </p>
                        </div>
                        <div className="test-type-card">
                            <h3>✍️ Grammatika</h3>
                            <p>
                                Ingliz til grammatikasining muhim qoidalarini o'rganish uchun amaliy testlar.
                                Turli grammatika strukturalari va vaqt forma uchun testlar mavjud.
                            </p>
                        </div>
                        <div className="test-type-card">
                            <h3>📕 O'qish ushbu kontent</h3>
                            <p>
                                Ingliz tilidagi matnlarni o'qish va tushunish ko'nikmalarini yaxshilash uchun testlar.
                                Turli murakkablik darajasidagi matnlar sizni kutmoqda.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Darajalar</h2>
                    <div className="levels-description">
                        <div className="level-desc-card">
                            <h3>A1 - Boshlang'ich</h3>
                            <p>
                                Eng oddiy so'zlar va iboralarni o'rganing. Kundalik muloqotdagi asosiy
                                ifodalarni tushunishni va qo'llanishni o'rganing.
                            </p>
                            <span className="level-badge">Yangi boshlovchilar</span>
                        </div>
                        <div className="level-desc-card">
                            <h3>A2 - Boshlang'ich yuqori</h3>
                            <p>
                                A1 qo'llaniladi chuqurroq. Kundalik va oddiy situatsiyalarda muloqot qila olasiz.
                            </p>
                            <span className="level-badge">Orta boshlang'ich</span>
                        </div>
                        <div className="level-desc-card">
                            <h3>B1 - O'rta</h3>
                            <p>
                                Turli mavzularda muloqot qila olasiz. Matnlarni tushunib, o'z fikringizni bildir
                                siz.
                            </p>
                            <span className="level-badge">O'rta sath</span>
                        </div>
                        <div className="level-desc-card">
                            <h3>B1+ - O'rta yuqori</h3>
                            <p>
                                Murakkab matnlarni tushunish va turli mavzularda chuqur muloqot qila olasiz.
                            </p>
                            <span className="level-badge">O'rta yuqori sath</span>
                        </div>
                    </div>
                </section>

                <section className="about-section faq-section">
                    <h2>Tez-tez so'raladigan savollar (FAQ)</h2>
                    <div className="faq-items">
                        <div className="faq-item">
                            <h4>Q: Men qayerdan boshlashim kerak?</h4>
                            <p>A: Agar siz Ingliz tilini birinchi marta o'rganayotgan bo'lsangiz, A1 darajasidan boshlang.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Har bir test qancha vaqt davom etadi?</h4>
                            <p>A: Test turlaridan va savol sonidan bog'liq. Odatda 5-15 minut davom etadi.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Mening natijalarim saqlanib turadimi?</h4>
                            <p>A: Hozircha natijalar saqlanmaydi, lekin turama bajon qo'shilish rejada.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Qancha paytda davr ustida taraqqiy qilishim kerak?</h4>
                            <p>A: Har bir kishi boshqacha. Lekin kuniga 30 minut o'qish tavsiya etiladi.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Testni takrorlashim mumkinmi?</h4>
                            <p>A: Ha! Xohlagancha takrori qila olasiz. Bu yanada chuqur o'rganishga yordam beradi.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Dastur to'lovli ekanmi?</h4>
                            <p>A: Yo'q! Vocabulary Test bu mutlaqo bepul dastur.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section contact-section">
                    <h2>Biz bilan aloqa</h2>
                    <p>Agar sizda savol yoki taklif bo'lsa, biz bilan bog'laning:</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <p>Email: info@vocabularytest.uz</p>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <p>Telegram: @VocabularyTestBot</p>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">💬</span>
                            <p>Feedback: feedback@vocabularytest.uz</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
