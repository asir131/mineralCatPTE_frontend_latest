"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type TabType = "subscription";
type PlanType = "Essential" | "Premium" | "Master";

interface Plan {
  id: PlanType;
  name: string;
  description: string;
  price: string;
  buttonText: string;
  recommended?: boolean;
  features: string[];
}

const subscriptionPlans: Plan[] = [
  {
    id: "Essential",
    name: "Essential",
    description: "For light preparation",
    price: "$ 199.99",
    buttonText: "Get Essential",
    features: [
      "3 Full Mock Tests",
      "100 AI Credits",
      "Premium scoring",
      "Official PTE criteria",
      "Weekly Predictions",
      "Performance Tracking",
      "Premium scoring",
      "No expiration",
    ],
  },
  {
    id: "Premium",
    name: "Premium",
    description: "For consistent Premiumgress",
    price: "$ 299.99",
    buttonText: "Get Premium",
    recommended: true,
    features: [
      "7 Full Mock Tests",
      "250 AI Credits",
      "Premium scoring",
      "Official PTE criteria",
      "Weekly Predictions",
      "Performance Tracking",
      "Premium scoring",
      "No expiration",
    ],
  },
  {
    id: "Master",
    name: "Master",
    description: "For complete preparation",
    price: "$ 499.99",
    buttonText: "Get Master",
    features: [
      "12 Full Mock Tests",
      "500 AI Credits",
      "Premium scoring",
      "Official PTE criteria",
      "Weekly Predictions",
      "Performance Tracking",
      "Premium scoring",
      "No expiration",
    ],
  },
];

export default function CoachingPlan() {
  // Remove state and make it a constant - always "Premium" by default
  const selectedPlan: PlanType = "Premium";

  const plans = subscriptionPlans;
  const gradientClass = "bg-gradient-to-r from-[#A52B1A] to-[#EF5634]";

  return (
    <div className="min-h-screen lg:mx-20 px-6 py-5 md:py-10 lg:px-12">
      {/* Header Section */}
      <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-20">
        <div className="grid text-center justify-center">
          <div className="flex justify-center items-center">
            <span className="w-40 hidden md:block border-2 mr-2"></span>
            <h1 className="text-4xl font-bold lg:text-5xl flex items-center">
              <span className="text-[#DE3B40] text-center mr-4">Coaching</span>{" "}
              plans
            </h1>
            <span className="w-40 hidden md:block border-2 ml-2"></span>
          </div>
          <p className="mt-4 text-lg text-gray-600 lg:max-w-4xl">
            Take your <span className="font-bold">PTE Core</span> Core
            preparation to the next level with personalized coaching. Work
            directly with expert trainers who analyze your performance, guide
            your practice, and help you reach your target score faster.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          return (
            <div
              key={plan.id}
              // Remove onClick handler to prevent selection changes
              className="relative overflow-hidden rounded-2xl border border-gray-200 transition-all"
            >
              {/* Header Section with gradient when selected */}
              <div
                className={`p-6 transition-all ${
                  isSelected
                    ? `${gradientClass} text-white`
                    : "bg-[#e0e0e0] text-gray-900"
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div
                    className={`absolute right-6 rounded-full px-4 py-1 text-sm font-semibold ${
                      isSelected
                        ? "bg-white text-[#EF5634]"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Recommended
                  </div>
                )}

                {/* Plan Name and Description */}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    isSelected ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Body Section - always light background */}
              <div className="bg-white p-8">
                {/* Price */}
                <div className="text-5xl font-bold text-center text-gray-900">
                  {plan.price}
                </div>

                {/* CTA Button */}
                <button
                  className={`mt-6 w-full rounded-lg py-3 font-semibold transition-all ${
                    isSelected
                      ? `${gradientClass} text-white hover:opacity-90`
                      : "border border-gray-800 bg-transparent text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Features
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <Check size={18} className="text-[#EF5634]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


