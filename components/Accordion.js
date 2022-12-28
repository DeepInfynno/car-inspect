import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import DownArrow from "../assets/images/downArrow.svg";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="font-bold text-base text-[#212338]">
          Terms and condtions <span className="text-[#70BF44]">Expand</span>
        </p>
        <div className={classNames(open ? "rotate-180" : "")}>
          <Image src={DownArrow} width={16} height={16} alt="image" />
        </div>
      </div>
      <div
        className={classNames(
          "mt-8 flex flex-col gap-10 overflow-hidden",
          open ? "h-full" : "h-0"
        )}
      >
        <h1 className="font-bold text-2xl text-[#212338] uppercase">
          CAR INSPECT PTY LTD TERMS AND CONDITIONS
        </h1>
        <p className="font-medium text-[#646574] text-sm">
          A. DEFINED TERMS App means any mobile application through which the
          Services are made available from time to time, as amended or
          supplemented. Carinspect means Team Inspect Pty Ltd ACN 638 480 365
          (trading as Carinspect and any of its assigns, successors,
          subsidiaries, agents, employees, representatives, officers, directors,
          affiliated entities and / or related bodies corporate. Carinspect
          Report means, in relation to a Vehicle, a report comprising the
          Inspection Report and the Car History Report. Car History Report
          means, for vehicles built after 1989, a third party report generated
          through the CarHistory platform including VIN Validation, PPSR
          Certificate, stolen check, written-off check, finance check, odometer
          roll-back check, registration check, Takata airbag recall check.
          Claims means claims, losses, disputes, damages, differences, demands,
          notices, suits, actions, proceedings, expenses and liabilities,
          whether legal or equitable, under statute or otherwise of whatever
          nature and howsoever arising. Complaints Form means the complaints
          form made available on the Website or App from time to time, detailing
          the nature of the complaint or dispute. Inspection means the
          pre-purchase Vehicle inspection to be undertaken by the Mechanic in
          accordance with these Terms (and, where applicable, includes any
          associated road test of the Vehicle). Inspection Report means a third
          party report detailing the results of an Inspection, prepared and
          compiled solely by a Mechanic. Mechanic means a locally accredited
          mobile mechanic engaged as an independent contractor by Carinspect to
          undertake Inspections. Seller means the seller of the Vehicle.
          Services means an online platform for the purposes of obtaining a
          Carinspect Report. Vehicle means the used car or vehicle the subject
          of the Inspection and Carinspect Report. Website means
          www.carinspect.com.au You means You, the person accessing or using the
          App or the Website or otherwise permitting or facilitating the
          Services to be provided or an Inspection to occur (either personally
          or on behalf of another person or entity) and Your has a corresponding
          meaning. For the avoidance of doubt, You includes but is not limited
          to the Buyer, the Seller and the Mechanic (as the case may be). B.
          TERMS OF USE 1. Application 1.1 These Terms govern the use or access
          by You of the App, Website, Services, Inspection and Carinspect
          Reports, or other content provided to You by or on behalf of
          Carinspect. 1.2 These Terms constitute a legally binding agreement
          between You and Carinspect, to the exclusion of all other agreements,
          representations, terms or rules. By using or accessing the App or
          Website or otherwise permitting or facilitating the Services to be
          provided or an Inspection to occur, You agree to be bound in full by
          these Terms. 2. Use of App and Website 2.1 Carinspect may collect
          personal and identifying information to provide the Services,
          including Your name, current physical location, mobile telephone
          number, email address, and payment method (i.e. credit card details).
          You consent to Carinspect dealing with Your personal information in
          accordance with its privacy policy located on the Website. 2.2 You are
          responsible for ensuring all information submitted to the App or
          Website is current, complete, and up to date at all times. You warrant
          that all information submitted by You is accurate and truthful. You
          are responsible for all activity that occurs on Your Carinspect
          account (if applicable) and You agree to maintain the security and
          secrecy of Your account and login credentials. 2.3 Carinspect assumes
          no responsibility, and shall not be liable for any Claims arising from
          errors, technical issues, system outages, malfunctions or malware,
          viruses or other platform or system errors on account of Your access
          to or use of the Services, Website or App. 3. Nature of Services 3.1
          Carinspect is an online platform enabling a potential purchaser of a
          used Vehicle to obtain an Inspection Report and Car History Report
          before determining whether to proceed with the purchase of that
          Vehicle. Carinspect does not itself provide mechanical, engineering or
          quality-verification services. The Services are made available for
          Your private and confidential use only. 4. Fees and Cancellations 4.1
          In consideration of Carinspect providing You with the Services, You
          agree to pay the applicable fees set out in the App or Website. 4.2
          Subject to clauses 4.3 and 4.4 below, Carinspect offers a full refund
          (minus a $12.50 credit card fee) for Vehicle Inspections that for any
          reason do not occur. 4.3 Where You request the Inspection be cancelled
          after an Inspection time and date has been set with the Seller of the
          Vehicle, Carinspect will retain a $60 administration fee and will
          refund the balance of the order. 4.4 Where a Mechanic attends but is
          unable to complete an Inspection for reasons not attributable to fault
          on the part of Carinspect or the Mechanic, Carinspect will retain a
          $150 cancellation fee and refund the balance of the order. 5.
          Inspection Report 5.1 Mechanics All Inspections will be carried out by
          Mechanics appointed by Carinspect. Carinspect will use its best
          endeavours to ensure that all Mechanics are fully qualified motor
          mechanics and possess their own Public Liability and Professional
          Indemnity Insurance. 5.2 Non-mechanical inspection only The nature of
          the Inspection is non-mechanical only. Inspections will be performed
          by reference to a standard checklist of items determined by
          Carinspect, which may vary as between make/model of Vehicle and the
          type of Inspection ordered by You. Inspections will address the
          Vehicle`&apos;` exterior, interior, engine compartment, tyres and
          wheels, brakes, underbody and a road test. No removal of parts or
          components is undertaken during the Inspection process. 5.3 Road tests
          Where deemed safe to do so, Vehicles are road-tested to the speed
          limit of the local area which may affect the Mechanic`&apos;` ability
          to draw an accurate conclusion on some of the checklist items detailed
          in the Inspection Report. It remains at the sole discretion of the
          Mechanic whether the Vehicle is safe and reliable enough to perform a
          road test within the surrounding area of the Inspection location. A
          road test will not be performed if the Vehicle is unregistered or if
          it is otherwise deemed unsafe by the Mechanic to do so. It is the
          responsibility of the Mechanic to ensure the accuracy, safety or
          completeness of the Inspection, including any road test. 5.4 As-is
          basis Inspections will be performed on an as-is basis, based upon the
          condition of the Vehicle and surrounding environment as at the
          specified time and date of the Inspection. Where the Mechanic is
          unable to make a conclusive determination in relation to the checklist
          of items (based on external factors such as weather, cleanliness of
          Vehicle, location of Vehicle or otherwise) this will be specified in
          the Inspection Report. 5.5 Exclusions You acknowledge and agree that
          the Inspection and issuing Inspection Report will not cover the
          following: a) condition of fuel and oil consumption; b) timing belts
          or chain, alarm/ security systems, trip meters; c) computers; d) head
          units; e) navigation / GPS systems; f) TV, cassette or disc player; g)
          auto wipers; h) adaptable lights; i) water leaks or moisture ingress;
          j) any filters including diesel particulate filters and catalytic
          converters; k) engine internals (including fuel injectors, EGR valves,
          sludge or carbon build up); l) suitability of tyres including size and
          age (other than to the extent of noting the tread wear); m) load
          rating; n) manufacturer recall notices; o) confirmation of the
          manufacturer`&apos;`specified and approved oils, fluids and coolants
          are fitted to the Vehicle; or p) other mechanical, functionality or
          performance indicators in relation to the Vehicle. 5.6 Results The
          Inspection Report provided to You, the condition assessment of the
          Vehicle and the checklist responses in the Inspection Report are the
          opinion of the Mechanic only, and in no way reflect those of
          Carinspect. 5.7 Detection of faults You acknowledge that while the
          Mechanics apply industry standard methodologies for the detection of
          any faults relating to a Vehicle, there is no guarantee that an
          Inspection will identify any or all faults with a Vehicle. Carinspect
          strongly recommends You consider the age, mileage and overall
          condition of the Vehicle prior to purchase, and make Your own
          enquiries with respect to matters covered and not covered by the
          Inspection Report. 6. Car History Report 6.1 Prior to issuing the
          Carinspect Report, Carinspect will conduct a search to obtain a Car
          History Report in relation to the Vehicle. 6.2 If a Car History Report
          is available in relation to the Vehicle, the results of the search
          will be enclosed with the Carinspect Report. 6.3 You acknowledge and
          agree that the Car History Report is a compilation of data and
          information pertaining to a Vehicle, which is held and maintained by
          third parties. 6.4 Carinspect makes no guarantee as to the accuracy of
          the information comprised in the Car History Report, and strongly
          recommends You make your own enquiries in relation to the accuracy of
          its contents before deciding whether to proceed with the purchase of
          the Vehicle. 6.5 No Claim shall arise in relation to any facts,
          matters or circumstances which occur or arise in relation to a Vehicle
          after the Inspection. 7. Carinspect Report 7.1 The contents of the
          Inspection Report and Car History Report (if available) in relation to
          a Vehicle form the Carinspect Report, and will be supplied to You in
          accordance with these Terms. 7.2 You acknowledge and agree that in
          providing the Carinspect Report, Carinspect will be presenting
          information and results obtained by third parties. Carinspect makes no
          warranty, representation or guarantee as to the contents of the
          materials enclosed in the Carinspect Report including the accuracy or
          suitability of the same. No Claims shall arise as against Carinspect
          for or in relation to the findings or results expressed in the
          Inspection Report or the Car History Report. 7.3 You understand and
          agree that the Inspection Report is not, and should not be considered
          to be a recommendation to purchase or not purchase a vehicle. Any
          decision to purchase a vehicle is Your own having regard to such
          matters as You consider relevant having regard to Your own
          circumstances, investigations and enquiries. 7.4 The Carinspect Report
          does not act as a roadworthy certificate or safety certificate, and
          Carinspect makes no representation that an Inspected Vehicle would
          pass a road authority inspection. 8. Complaints 8.1 Where You wish to
          make a complaint regarding an Inspection Report, You must complete a
          Complaints Form. 8.2 Upon receipt of a Complaints Form, Carinspect
          will review the Inspection Report. 8.3 Where the complaint relates to
          the findings set out in the Inspection Report, Carinspect shall
          provide the details of the Mechanic to You. The continuation of the
          complaint (including resolution of the same) shall be as between the
          Mechanic and You, and Carinspect shall not be liable to You for any
          Claims arising from the complaint. 8.4 Subject to these Terms, if
          Carinspect determines that the Carinspect Report does not comply with
          Australian Consumer Law, Carinspect will refund to You the cost of the
          Services, and thereafter Your complaint will be finalised and You will
          have no further rights or Claims against Carinspect in relation to the
          provision of the Services. 9. Intellectual Property Rights 9.1 All
          rights in and to the App, the Website and the Services belong to
          Carinspect and Your use of them does not constitute any transfer or
          assignment of proprietary rights to the same. Carinspect owns all
          intellectual property rights in and to the App, the Website and the
          Services, including all trade marks, copyright, branding and other
          indicia. 9.2 You must not use, remove or republish such intellectual
          property other than as expressly set forth in these Terms. You must
          not attempt to reproduce, reverse engineer, or obtain access to any
          aspect of the system or network underlying the App, the Website or the
          Services. You must not, either directly or indirectly, authorise any
          third party to do any of the things set out in this clause. 9.3 You
          may use the “share” feature that Carinspect may make available on the
          Carinspect Report, the App or Website to share on social media or with
          email recipients. 10. Social Media 10.1 You must not publish, on or in
          connection with the App, the Website or the Services, anywhere in the
          world any comments or statements which are false, defamatory, abusive,
          or which constitute harassment or contain offensive language
          concerning Carinspect or the Services. The above applies to any social
          media or other publicly available profiles held or maintained in
          relation to Carinspect. 11. Limitation of Liability 11.1 Carinspect
          does not: a) warrant the accuracy, safety or completeness of the
          Inspection and / or the Inspection Report (including but not limited
          to any representations made in the Report); b) guarantee or ensure the
          availability, safety or condition of the Vehicle or any transaction
          between prospective or actual buyers and sellers; c) collect or
          process payment for or transfer title to any vehicle; or d) warehouse,
          store, ship or deliver any vehicles. 11.2 To the maximum extent
          permitted by law and unless otherwise set out in these Terms: a)
          Carinspect disclaims all responsibility and liability in relation to
          any Claims arising out of or in any way connected with Your use of the
          Services, the Inspection and Inspection Report, and the Car History
          Report; b) Carinspect disclaims all responsibility and liability in
          relation to any Claims arising out of or in any way connected with any
          damage caused to the Vehicle during the course of the Inspection
          (including, but not limited to, the road test); c) all rights,
          remedies, conditions, guarantees and implied and express warranties in
          respect of any goods or services provided by Carinspect are hereby
          excluded; d) Carinspect will not be liable for any Claims for
          indirect, punitive, special or consequential losses arising out of
          Your use of the Services (including the Inspection and Report); e)
          Carinspect`&apos;` liability to You, if any, will be reduced or
          limited by Your contribution to the loss or damage suffered and shall
          in any event be limited to sum paid by You for the Services supplied;
          and f) You indemnify and hold harmless Carinspect from any and all
          Claims arising out of or in connection with Your use of the Services
          (including the Inspection and Report). 12. Third-Party Business
          Associates 12.1 The third-party business associates of Carinspect
          identified on the Website or App (including, but not limited to, the
          Mechanics, external report data sources and payment gateways) are
          independent contractors of Carinspect. The third-party business
          associates are not joint ventures or partners of Carinspect. No
          employee or representative of the business associates is under the
          control of Carinspect and Carinspect is not liable for any acts or
          omissions thereof. 12.2 Drive On Finance (ABN 77 608 377 859) is a
          third-party service provider recommended by Carinspect. By agreeing to
          provide Your personal information to Carinspect for the purpose of
          obtaining a finance quote, You agree to Carinspect providing this
          information to Drive On Finance. Carinspect is in no way affiliated
          with Drive On Finance and takes no responsibility for any dealings
          between You and Drive On Finance. For more information on the use of
          personal information please visit our privacy policy. 12.3 Prixcar
          Transport Services Pty Ltd (ABN 18 158 361 72) is a third-party
          service provider recommended by Carinspect. By using the services of
          Prixcar, You enter into an agreement with Prixcar and by doing so are
          agreeing to their terms and conditions of service. All liability
          thereof is the responsibility of Prixcar Transport Services Pty Ltd.
          Car Inspect is inno way affiliated with Prixcar Transport Services and
          take no responsibility for any dealings between You and Prixcar. 13.
          General 13.1 Amendment These Terms may be updated or amended from time
          to time. Amendments or updates will be published at this location or
          notified via email and will be effective upon publication. Your
          continued use of the Services constitutes Your acceptance of any
          amendments or updates to the Terms. 13.2 Assignment Your rights and
          obligations under these Terms are personal and cannot be assigned,
          without the prior written consent of Carinspect. Carinspect may
          assign, encumber or otherwise deal with its rights and obligations
          under these Terms to any third party without prior notice to or
          consent from You. 13.3 Waiver No failure, delay, relaxation or
          indulgence on the part of Carinspect in exercising any power or right
          conferred upon it by these Terms will operate as a waiver of such
          power or right nor will any single or partial exercise of any such
          power or right nor any single failure to do so, preclude any other or
          future exercise thereof, or the exercise of any other power or right
          under these Terms. 13.4 Severability If anything in these Terms is
          unenforceable, illegal or void, then it is severed and the rest of the
          Terms remain in force. 13.5 Governing Law These Terms are governed by
          and must be construed in accordance with the laws of Victoria. Subject
          to Your obligations to adhere to the dispute resolution processes set
          out above, You irrevocably and unconditionally submit to the exclusive
          jurisdiction of the courts of Victoria and all courts which have
          jurisdiction to hear appeals from those courts, and waives any right
          to object to proceedings being brought in those courts for any reason.
          If You have a question, problem or complaint or need to contact us
          please do so at the below:
        </p>
        <p className="font-medium text-[#646574] text-sm">
          Team Inspect Pty Ltd <br /> 38 York Street <br /> South Melbourne, VIC
          3205 <br /> Email: info@carinspect.com.au
        </p>
      </div>
    </>
  );
};

export default Accordion;
