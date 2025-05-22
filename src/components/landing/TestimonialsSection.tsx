
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Trusted by businesses worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                MB
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Michael Brown</h4>
                <p className="text-sm text-muted-foreground">CEO, TechStart</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "CharterGenie saved us thousands in legal fees. We created all our company policies in less than a day."
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                SJ
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">Founder, EcoGoods</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The compliance guarantee gives me peace of mind knowing our documents are always up to date with regulations."
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                DP
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">David Parker</h4>
                <p className="text-sm text-muted-foreground">Legal Director, MediaCorp</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "As a legal professional, I'm impressed by the accuracy and comprehensiveness of CharterGenie's documents."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
