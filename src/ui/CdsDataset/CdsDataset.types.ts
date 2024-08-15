export interface CdsDatasetProps {
  dataset: string;
}

export interface CdsDatasetAPIProps {
  description: string;
  title: string;
  assets: {
    thumbnail: {
      href: string;
    };
  };
}