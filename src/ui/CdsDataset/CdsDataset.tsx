import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, Skeleton, Title, Card, Container, Space, Group, Text } from '@mantine/core';
import { CdsDatasetProps, CdsDatasetAPIProps } from './CdsDataset.types';


export const CdsDataset = ({dataset}: CdsDatasetProps) => {
  const RETRIEVE_API = 'https://cds-beta.climate.copernicus.eu/api/catalogue/v1/collections/'
  const [collection, setCollection] = useState({} as CdsDatasetAPIProps);
  const theme = useMantineTheme();
  const desktop = !useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  useEffect(() => {
    fetch(RETRIEVE_API + dataset, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => setCollection(data))
    .catch((error) => console.error('Error:', error));
  }, [dataset]);

  return (
    <Container>
    <Space h="lg" />
    <a style={{textDecoration: "none"}} href={'https://cds-beta.climate.copernicus.eu/datasets/' + dataset + '?tab=overview'} target='_blank'>
    <Card shadow="md" padding="md">
      <Group justify='left'>

            {(desktop && collection.assets) &&
              <Card shadow="xs" padding={0} style={{height: 150, width: 150, background: `url(${collection.assets.thumbnail.href}) no-repeat center `, backgroundSize: '150px auto', }} />
            }
            {!collection.assets &&
              <Skeleton style={{height: 150, width: 150}} />
            }

        <Container style={{width: "calc(54rem - 200px)"}}>
            {collection.description &&
              <Title order={4} style={{color: "#25408F"}}>{collection.title}</Title>
            }
            {!collection.description &&
            <>
              <Skeleton height={18} width="85%" radius="xl" />
              <Space h="md"/>
            </>
            }
          
            {collection.description && <Text>{collection.description.substring(0, 300) + '...'}</Text>}
            {!collection.description &&
            <>
              <Skeleton height={12} radius="xl" />
              <Skeleton height={12} mt={12} radius="xl" />
              <Skeleton height={12} mt={12} radius="xl" />
              <Skeleton height={12} mt={12} width="70%" radius="xl" />
            </>
            }
          
        </Container>
      </Group>
    </Card>
    </a>
    </Container>
  );
}
