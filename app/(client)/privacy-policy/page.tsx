import BrandLink from '@/components/Link/Link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy <span className="text-gray-500 text-base">[updated: 23/09/25]</span>
      </h1>

      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
        <p>
          When you sign up to our newsletter, we collect your <strong>email address</strong> and{' '}
          <strong>birthday</strong> so we can send you a reminder on your birthday.
        </p>
        <p>
          We use{' '}
          <BrandLink href="https://sender.net" external>
            Sender.net
          </BrandLink>{' '}
          as our email service provider to deliver these messages. Your data is stored securely on
          their platform and will never be sold or shared with third parties. We do not store your
          data directly on our own systems.
        </p>
        <p>
          We will keep your data until you unsubscribe from our emails, which you can do at any time
          using the link in our emails.
        </p>
        <p>
          You may also request access to or deletion of your data by contacting us at:{' '}
          <BrandLink href="mailto:info@birthdayfreebie.co.uk" external>
            info@birthdayfreebie.co.uk
          </BrandLink>
          .
        </p>
        <hr />
        <p>
          The data controller for this site is the owner of birthdayfreebie.co.uk. If you have any
          questions about how your data is handled, please contact us at{' '}
          <BrandLink href="mailto:info@birthdayfreebie.co.uk" external>
            info@birthdayfreebie.co.uk
          </BrandLink>
          .
        </p>
      </div>
    </div>
  )
}
