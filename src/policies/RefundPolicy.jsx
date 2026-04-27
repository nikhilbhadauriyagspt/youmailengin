const RefundPolicy = () => {
  return (
    <section className="py-24 bg-white font-sans text-zinc-900 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-blue-800">Return Policy</h1>
        <p className="text-zinc-600 mb-12 border-b border-zinc-100 pb-8 uppercase font-bold tracking-widest">Last updated April 28, 2026</p>

        <div className="space-y-12 text-[17px] leading-relaxed text-zinc-700">
          <p>
            Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a refund only. Please see below for more information on our return policy.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">RETURNS</h2>
            <p>
              All returns must be postmarked within seven (7) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">RETURN PROCESS</h2>
            <p>
              To return an item, please email customer service at <span className="text-blue-800 font-medium">info@mailyaga.shop</span> to obtain an Return Merchandise Authorization (RMA) number. After receiving an RMA number, place the item securely in its original packaging and include your proof of purchase, then mail your return to the following address:
            </p>
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 font-medium text-zinc-800">
              <p>Mail Yaga</p>
              <p>Attn: Returns</p>
              <p>RMA #</p>
            </div>
            <p>Return shipping charges will be paid or reimbursed by us.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">REFUNDS</h2>
            <p>
              After receiving your return and inspecting the condition of your item, we will process your return. Please allow at least seven (7) days from the receipt of your item to process your return. Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your return has been processed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">EXCEPTIONS</h2>
            <p>
              For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 uppercase">QUESTIONS</h2>
            <p>
              If you have any questions concerning our return policy, please contact us at:
            </p>
            <div className="font-bold text-zinc-900">
              <p>+1-402-508-9991</p>
              <p>info@mailyaga.shop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
