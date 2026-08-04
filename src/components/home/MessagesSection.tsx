import { chairmanMessage, principalMessage } from '@/data/site';
import MessageSection from '@/components/shared/MessageSection';

export default function MessagesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-16 px-6">
        <MessageSection data={chairmanMessage} eyebrow="Leadership" title="Message from the Chairman & Managing Director" index={0} />
        <MessageSection data={principalMessage} eyebrow="Leadership" title="Message from the Principal" index={1} />
      </div>
    </section>
  );
}
