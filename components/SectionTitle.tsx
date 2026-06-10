type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}