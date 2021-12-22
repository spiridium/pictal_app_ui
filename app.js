import { createApp } from "https://unpkg.com/petite-vue?module";
createApp({
    currentStep: 0,
    previousStep() {
        if (this.isFirstStep) return;
        this.currentStep--;
      },
      nextStep() {
        if (this.isLastStep) return;
        this.currentStep++;
      },
      get totalSteps() {
        return this.steps.length;
      },
      get isFirstStep() {
        return this.currentStep === 0;
      },
      get isLastStep() {
        return this.currentStep === this.totalSteps - 1;
      },
      get theFields() {
        return this.fields
      },
    steps: [
        ["name", "email", "color"],
        ["address", "city", "state", "zip"],
        ["donationAmount"]
      ],
    fields: {
        color: {
          label: "Color",
          value: "",
          type: "color",
        },
        name: {
        label: "Name",
        value: "",
        type: "text",
        },
        email: {
        label: "Email",
        value: "",
        type: "text",
        },
        address: {
        label: "Address",
        value: "",
        type: "text",
        },
        city: {
        label: "City",
        value: "",
        type: "text",
        },
        state: {
        label: "State",
        value: "",
        type: "text",
        },
        zip: {
        label: "Zip",
        value: "",
        type: "text",
        },
        donationAmount: {
        label: "Donation Amount",
        value: "",
        type: "text",
        }
    }
}).mount("#multi-step-form")