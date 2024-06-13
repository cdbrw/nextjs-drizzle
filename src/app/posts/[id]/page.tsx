import Title from '@/components/title';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params.id} | cdbrw`,
  };
}

export default function Page({ params }: PostPageProps) {
  const { id } = params;

  if (parseInt(id, 10) > 10) {
    notFound();
  }

  return (
    <section className="flex flex-col items-center">
      <Title text={`Post ${id}`} />

      <div className="w-1/2 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
        dui ipsum. Ut nec elementum massa. Ut placerat aliquam lobortis. Donec
        eget nisl vel felis rutrum ultrices at at libero. Sed eros mi, mattis a
        varius eget, sollicitudin sed nunc. Sed scelerisque justo et augue
        pulvinar tempus. Aliquam elementum hendrerit lacus in commodo. Aliquam
        non sapien viverra, feugiat massa non, dignissim sem. Ut posuere
        tincidunt lectus, a accumsan elit pharetra in. Phasellus suscipit, massa
        ut ornare auctor, nibh felis fringilla arcu, vitae pretium lorem elit eu
        leo. Etiam id facilisis lorem. Integer consectetur felis ac ultricies
        bibendum. Fusce eleifend tellus non accumsan varius. Maecenas quis
        porttitor sem, nec rutrum neque. Integer molestie sodales velit,
        fringilla vestibulum urna porttitor sit amet. Vivamus ipsum sem, aliquam
        quis arcu quis, tempus porta justo. Nunc gravida sollicitudin purus eget
        pulvinar. Sed fermentum nibh a ex convallis elementum. Vestibulum nunc
        sapien, vulputate in fermentum nec, pulvinar vel urna. Morbi commodo
        interdum sodales. Ut non consectetur metus, nec rhoncus lacus. Maecenas
        consectetur finibus nisl, non tristique quam accumsan sit amet. Sed ut
        mauris vitae lorem lacinia maximus. Nullam vitae tellus hendrerit,
        accumsan arcu in, molestie dui. Sed congue gravida leo eu elementum.
        Pellentesque ut sem ut velit congue pharetra. Nam sed nisl a purus
        gravida fermentum a nec sapien. Cras egestas tellus sed nisl mattis,
        eget mollis nulla consequat. Curabitur tempor nisi at magna aliquet
        porta. Integer non arcu sed ante facilisis iaculis sit amet quis arcu.
        Vestibulum id rhoncus elit, sed luctus diam. Integer suscipit sem in
        bibendum maximus. Maecenas non purus laoreet, auctor leo non, pretium
        enim. Suspendisse enim nibh, gravida id bibendum sit amet, rhoncus nec
        orci. Nulla facilisi. Etiam nec lacus posuere, commodo ante eget,
        tristique odio. Aliquam molestie lectus lectus, sit amet cursus lorem
        ullamcorper a. Phasellus elementum quis mi id bibendum. Vivamus
        fringilla justo eget mattis vulputate. Praesent in condimentum lorem.
        Sed eu placerat lorem. Nunc ac vestibulum ex. Cras volutpat sodales
        justo, a gravida ligula consectetur vitae. Suspendisse vulputate, justo
        at viverra dapibus, metus massa ornare lectus, rhoncus molestie nisl
        nibh eget nibh. Fusce tincidunt viverra elementum. Donec congue velit
        non diam facilisis, eu hendrerit quam rhoncus. Proin id tempor ligula,
        posuere bibendum sapien. Fusce non cursus orci, et convallis odio.
        Suspendisse convallis tincidunt lectus, a faucibus mauris placerat ut.
        Cras congue blandit libero ac interdum. Morbi in nibh sit amet tortor
        tincidunt mollis. Mauris molestie libero erat, ut feugiat lectus rhoncus
        et. Aliquam consectetur elit a erat tincidunt, a pretium nibh lacinia.
        Suspendisse potenti. Donec condimentum, libero ac vestibulum posuere,
        arcu tellus fermentum lectus, et aliquam nisi justo non tortor. Praesent
        volutpat justo in nisl venenatis ullamcorper. Proin scelerisque cursus
        nibh, a placerat urna tristique sit amet. Nunc augue ante, tempor sed
        ante a, dictum tincidunt risus. Aliquam suscipit magna id scelerisque
        auctor. Nunc eu consectetur odio. Morbi ultrices, leo sed laoreet
        posuere, lacus metus venenatis ex, non lacinia est nulla in mauris. In
        auctor, nulla id accumsan suscipit, lorem est gravida ex, pretium
        placerat nunc massa malesuada felis. Cras ut velit diam. Nulla in
        lacinia leo. Fusce fringilla nibh sem, vel condimentum eros volutpat
        sed. Nulla a nibh accumsan lorem ultricies dictum quis lacinia augue.
        Duis porta, magna in condimentum fermentum, orci ligula lacinia nibh, at
        facilisis tortor nibh id sapien.
      </div>
    </section>
  );
}
