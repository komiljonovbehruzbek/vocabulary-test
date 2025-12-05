import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <h1>📚 Vocabulary Test Dasturi</h1>
                <p>Ingliz tilini o'rganishning eng samarali usuli</p>
            </div>

            <div className="home-content">
                <section className="features">
                    <h2>Xususiyatlari:</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📖</div>
                            <h3>So'z asosiy lexika</h3>
                            <p>A1 dan B1+ gacha barcha darajalar uchun so'zlar</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✍️</div>
                            <h3>Grammatika testlari</h3>
                            <p>Grammatika qoidalarini mustahkamlashtirish</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📖</div>
                            <h3>O'qish mashqlar</h3>
                            <p>Ingliz tilidagi matnlarni o'qish va tushunish</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>Boshlaylik!</h2>
                    <p>Testni boshlash uchun quyidagi tugmani bosing</p>
                    <Link to="/test" className="cta-button">
                        Testni Boshlash 🚀
                    </Link>
                </section>

                <section className="levels-info">
                    <h2>Darajalar:</h2>
                    <div className="levels-grid">
                        <div className="level-card">
                            <h3>A1</h3>
                            <p>Boshlang'ich</p>
                            <p className="level-desc">50+ so'z</p>
                        </div>
                        <div className="level-card">
                            <h3>A2</h3>
                            <p>Boshlang'ich</p>
                            <p className="level-desc">10 Unit</p>
                        </div>
                        <div className="level-card">
                            <h3>B1</h3>
                            <p>O'rta</p>
                            <p className="level-desc">100+ so'z</p>
                        </div>
                        <div className="level-card">
                            <h3>B1+</h3>
                            <p>O'rta yuqori</p>
                            <p className="level-desc">150+ so'z</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
