import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui/";

function VisaRules() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <span className="i-fluent:text-bullet-list-square-warning-24-regular"></span>
            Learn about Visa Rules
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl w-full">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Find a trip that fits you!
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <div className="leading-loose text-sm">
              <p>
                If you're planning a visit to Dubai, there are various types of
                tourist visas to accommodate different travel needs, depending
                on your eligibility:
              </p>
              <ol className="list-decimal pr-4">
                <li>
                  A single entry tourist visa, valid for 30 days or 60 days
                </li>
                <li>
                  A multiple-entry tourist visa, valid for 30 days or 60 days
                </li>
                <li>
                  A multiple-entry long-term tourist visa, valid for five years
                </li>
                <li>
                  A transit visa, one for 48 hours and another for 96 hours
                </li>
                <li>
                  Visa on arrival, either for 30 days or 90 days contingent on
                  nationality
                </li>
                <li>
                  Visa on arrival for Indians who have a visit visa issued by
                  the USA, or a green card issued by the USA, or a visit
                  visa/residence permit issued by the UK or the EU.
                </li>
                <li>
                  eVisa for residents of GCC countries (GCC citizens are
                  eligible for visa-free entry).
                </li>
              </ol>
              <p className="mt-3">
                Check the available visa options and requirements for your
                nationality using the dropdown menu.  There are fines for
                overstaying, which amount to a standardized fee of AED50 a day
                and will be calculated from 10 days after the expiry of the
                visa. Before applying for any tourist visa, do review the
                specific requirements for your chosen visa type and ensure all
                necessary documents are in order. In some cases, it is also
                possible to extend a tourist visa via GDRFA’s official website
                or an Amer Service Centre.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold">More Links</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center px-5 py-3 bg-gray-100 rounded-xl gap-6">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-bold">
                        Blog Post about UAE visa
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor..
                      </p>
                    </div>
                    <Button size={"icon"}>
                      <span className="i-fluent:arrow-up-right-24-regular"></span>
                    </Button>
                  </div>
                  <div className="flex items-center px-5 py-3 bg-gray-100 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-bold">Blog Post about UAE visa</h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor..
                      </p>
                    </div>
                    <Button size={"icon"}>
                      <span className="i-fluent:arrow-up-right-24-regular"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { VisaRules };
