import React from 'react';
import CaseStudies from "./CaseStudies";
import ClientSatisfaction from "./ClientSatisfaction";
import ClientsBar from "./ClientsBar";
import CompaniesBar from "./CompaniesBar";
import CostCalculator from "./CostCalculator";
import CostCalculatorSecond from "./CostCalculatorSecond";
import Costs from "./Costs";
import CtaLarge from "./CtaLarge";
import FAQ from "./FAQ";
import FeatureCards from "./FeatureCards";
import GettingStarted from "./GettingStarted";
import Hero from "./Hero";
import Network from "./Network";
import PeopleShowcase from "./PeopleShowcase";
import ProjectCard from "./ProjectCard";
import TalentSculpt from "./TalentSculpt";
import Teams from "./Teams";
import Testimonial from "./Testimonial";
import TestimonialRight from "./TestimonialRight";
import Testimonials from "./Testimonials";
import WhatClanCanDo from "./WhatClanCanDo";
import WhyKlen from "./WhyKlen";

export default function LandingPage() {
    return (
        <section className='landing-page'>
            <Hero />
            <ClientsBar />
            <Testimonial />
            <TalentSculpt />
            <ProjectCard />
            <PeopleShowcase />
            <ClientSatisfaction />
            <WhatClanCanDo />
            <WhyKlen />
            <CtaLarge />
            <FeatureCards />
            <Teams />
            <TestimonialRight />
            <Costs />
            <GettingStarted />
            <CompaniesBar />
            <Network />
            <CostCalculator />
            <CostCalculatorSecond />
            <CtaLarge />
            <CaseStudies />
            <Testimonials />
            <FAQ />


        </section>
    )
}
