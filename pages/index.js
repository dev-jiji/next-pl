import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            프론트엔드 개발자&nbsp;
                            <br className="hidden lg:inline-block" />
                            옥지은
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            FrontEnd Developer
                            <br />
                            성장곡선을 그리는 프론트엔드 개발자
                            <br />
                            느리더라도 꾸준히 발전하며
                            <br />
                            지속적인 학습과 도전을 통해
                            <br />
                            새로운 지식과 기술을 습득하고,
                            <br />
                            사용자가 필요로 하는 가치있는 서비스를
                            <br />
                            제공하는 것을 목표로 노력합니다.
                        </p>
                        <div className="flex justify-center">
                            <Link legacyBehavior href="/portfolio">
                                <button className="btn-project-index">
                                    Portfolio
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <DevAni />
                    </div>
                </div>
            </section>
        </>
    );
}
