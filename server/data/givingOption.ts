// data/givingOptions.ts
export const givingOptions = [
  {
    type: "🇳🇬 Nigerian Account (NGN)",
    details: [
      { label: "Account Name", value: "Spokesman Sanctuary of Hope" },
      { label: "Bank", value: "Access Bank" },
      { label: "Account Number", value: "1234567890" }
    ],
    note: "For transfers within Nigeria in Naira (₦)."
  },
  {
    type: "🌍 International Account (USD)",
    details: [
      { label: "Account Name", value: "Spokesman Sanctuary of Hope" },
      { label: "Bank Name", value: "Access Bank" },
      { label: "Account Number (USD)", value: "1234567890" },
      { label: "SWIFT Code", value: "ABNGNGLA" },
      { label: "Bank Address", value: "Access Bank, Victoria Island, Lagos, Nigeria" }
    ],
    note: "For international transfers in US Dollars (USD)."
  },
  {
    type: "💳 Card / Wallet / Online Payment",
    description: "Make a secure one-time donation online using your debit/credit card:",
    links: [
      {
        label: "Flutterwave – NGN, USD, GBP, more",
        href: "https://flutterwave.com/pay/SSOHGive"
      },
      {
        label: "PayPal – For USD & International",
        href: "https://paypal.me/SSOHChurch"
      }
    ]
  }
];
